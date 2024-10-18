org="https://github.com/VyperGroup/"

npm i

if [ ! -d demo-site ]
then
    git clone "${org}/aero-demo-site.git" demo-site
fi

cd demo-site
    git pull
    bash deps.sh
cd ..

