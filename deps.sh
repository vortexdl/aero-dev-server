org="https://github.com/VyperGroup/"

if [ ! -d demo-site ]
then
    git clone "${org}/aero-demo-site.git" demo-site
fi

cd demo-site
    git pull > /dev/null
    bash deps.sh
cd ..

