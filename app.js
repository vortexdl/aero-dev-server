import { join } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

import { createServer } from "node:http";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import wisp from "wisp-server-node";
import { createBareServer } from "@tomphttp/bare-server-node";

import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";

import config from "./config.js";

const bare = createBareServer("/bare/", {
	logErrors: true
});

const fastify = Fastify({
	serverFactory: handler => {
		return createServer()
			.on("request", (req, res) => {
				if (bare.shouldRoute(req)) {
					bare.routeRequest(req, res);
				} else {
					handler(req, res);
				}
			})
			.on("upgrade", (req, socket, head) => {
				wisp.routeRequest(req, socket, head);
			});
	},
	logger: true
});

async function aeroExamplesServe(fastify) {
	fastify.get("/sw.js", async (_req, reply) => {
		try {
			const swFilePath = join(
				fileURLToPath(new URL(".", import.meta.url)),
				"../examples/swWithExtras.js"
			);
			const swFile = await fs.readFile(swFilePath, "utf8");
			reply
				.code(200)
				.header("Content-Type", "application/javascript")
				.send(swFile);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
	fastify.get("/aero/defaultConfig.js", async (_req, reply) => {
		try {
			const configFilePath = join(
				fileURLToPath(new URL(".", import.meta.url)),
				"../src/defaultConfig.js"
			);
			const configFile = await fs.readFile(configFilePath, "utf8");
			reply
				.code(200)
				.header("Content-Type", "application/javascript")
				.send(configFile);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
	fastify.get("/aero/config.js", async (_req, reply) => {
		try {
			const configFilePath = join(
				fileURLToPath(new URL(".", import.meta.url)),
				"../examples/config.js"
			);
			const configFile = await fs.readFile(configFilePath, "utf8");
			reply
				.code(200)
				.header("Content-Type", "application/javascript")
				.send(configFile);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
	fastify.get("/aero/sandbox/config.js", async (_req, reply) => {
		try {
			const configFilePath = join(
				fileURLToPath(new URL(".", import.meta.url)),
				"../src/AeroSandbox/examples/config.js"
			);
			const configFile = await fs.readFile(configFilePath, "utf8");
			reply
				.code(200)
				.header("Content-Type", "application/javascript")
				.send(configFile);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}

fastify.register(aeroExamplesServe);

fastify.register(fastifyStatic, {
	root: join(fileURLToPath(new URL(".", import.meta.url)), "../tests"),
	prefix: "/tests",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: join(fileURLToPath(new URL(".", import.meta.url)), "../extras"),
	prefix: "/aero/extras/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: join(
		fileURLToPath(new URL(".", import.meta.url)),
		"../src/AeroSandbox/dist/debug/"
	),
	prefix: "/aero/sandbox/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
<<<<<<< HEAD
	root: join(fileURLToPath(new URL(".", import.meta.url)), "../dist/sw/"),
=======
	root: join(
		fileURLToPath(new URL(".", import.meta.url)),
		"../dist/debug/sw"
	),
>>>>>>> 8620c08 (Update routes due to recent changes in how aero builds)
	prefix: "/aero/",
	decorateReply: false
});
fastify.register(fastifyStatic, {
	root: join(fileURLToPath(new URL(".", import.meta.url)), "./demo-site"),
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
	host: config.host,
	port: config.port
});
