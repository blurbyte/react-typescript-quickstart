![React Typescript Quickstart](https://eloriel.blob.core.windows.net/images/react-ts-quickstart.png)

---

# Welcome to React TypeScript Quickstart
[![Build Status](https://travis-ci.org/blurbyte/react-typescript-quickstart.svg?branch=master)](https://travis-ci.org/blurbyte/react-typescript-quickstart)

A simple & opinionated starting kit without too much magic ✨. Just for developing React web apps with TypeScript.

Check out live app at [reactquickstart.surge.sh](https://reactquickstart.surge.sh) 🚀

For clean development environment without demo app and _styled-components_ check `clean` branch. For a setup without example app switch to `base` branch.

### Core libs

* __FuseBox__ bundler for its first class TypeScript support and handy task manager — _fuse.js_ config
* Styled with CSS-in-JS __styled-components__
* Automated tests with __jests__ and __enzyme__
* Linted with __tslint__ and formatted with __prettier__

### Concepts presented

* Creating and testing __render props__ component — _src/components/Counter_ and _src/components/ManageCounter_
* Implementing __compound component__ —  _src/components/TextList_ and _src/components/Table_
* Simple responsive app layout with __css grid__ and media queries
* CI/CD with __TravisCI__ and __Surge.sh__ — _.travis.yml_

### Getting started

1. Clone the repository `git clone https://github.com/blurbyte/react-typescript-quickstart`.
2. Install all required modules with simple `npm install` command.
3. Start demo app in development mode `npm start`. It will build a project, start webserver and open app in a browser.
4. All project files are placed under _/src_ folder.
5. To make a production build run `npm run build`, which will create ready to deploy static files in `/dist` directory.
