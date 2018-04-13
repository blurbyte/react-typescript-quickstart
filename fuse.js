const { FuseBox, WebIndexPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es5',
  output: 'dist/$name.js',
  cache: true,
  sourceMaps: true,
  plugins: [
    WebIndexPlugin({
      template: 'public/index.html',
      title: 'React TypeScript Quickstart'
    })
  ]
});

fuse.dev({
  open: true,
  port: 5000
});

fuse.bundle('app').instructions('> index.tsx').hmr().watch();

fuse.run();
