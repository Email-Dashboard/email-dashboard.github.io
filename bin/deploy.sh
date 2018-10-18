# build
vuepress build

# navigate into the build output directory
cp -r ./docs/. ../master/

cd ../master/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:SeaDude/SeaDude.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:sadikay/email-dashboard.github.io.git master:gh-pages

cd -
