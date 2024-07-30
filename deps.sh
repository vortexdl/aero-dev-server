org="https://github.com/VyperGroup/"

if [ ! -d aero ]
then
    git clone "${org}/aero-dev-server.git"
fi

cd aero-demo-server
    git pull > /dev/null
    bash deps.sh
cd ..

