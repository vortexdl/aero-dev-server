import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { createServer } from "node.http";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import wisp from "wisp-server-node";

import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";

const fastify = Fastify({
	serverFactory: handler => {
		return createServer()
			.on("request", (req, res) => {
				handler(req, res);
			})
			.on("upgrade", (req, socket, head) => {
				wisp.routeRequest(req, socket, head);
			});
	},
	logger: true
});
fastify.register(fastifyStatic, {
	root: join(fileURLToPath(new URL(".", import.meta.url)), "../tests"),
	prefix: "/tests",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: join(
		fileURLToPath(new URL(".", import.meta.url)),
		"./aero-demo-site"
	),
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: baremuxPath,
	prefix: "/baremux/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: epoxyPath,
	prefix: "/epoxy/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: libcurlPath,
	prefix: "/libcurl/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: bareModulePath,
	prefix: "/baremod/",
	decorateReply: false
});

fastify.listen({
	port: 3000
});
