#/bin/bash

set -e

yarn website:build

cp -r ./.vuepress/dist/. ../master/

cd ../master/

git add -A
git commit -m 'Deploy'
git push origin master

cd -
