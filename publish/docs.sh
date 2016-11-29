#! /bin/bash
npm run build:demo
cd demo/dist
git init
git add .
git commit -m "update docs"
git push -f git@github.com:vue-typed/vue-typed-ui.git master:gh-pages