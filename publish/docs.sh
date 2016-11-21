#! /bin/bash
npm run build:demo
cd demo
git init
git add dist/*
git add index.html
git commit -m "update docs"
git push -f git@github.com:vue-typed/vue-typed-ui.git master:gh-pages