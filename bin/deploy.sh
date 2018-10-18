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

git push -f git@github.com:Email-Dashboard/email-dashboard.github.io.git master

cd -
