const { FuseBox, WebIndexPlugin, QuantumPlugin, CSSPlugin } = require('fuse-box');
const { src, task, exec, context } = require('fuse-box/sparky');

// Context availible for all tasks
context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      target: 'browser@es5',
      hash: this.isProduction,
      output: 'dist/$name.js',
      cache: !this.isProduction,
      sourceMaps: !this.isProduction,
      alias: {
        "@styles": "~/styles/"
      },
      plugins: [
        WebIndexPlugin({
          template: 'public/index.html',
          title: 'React TypeScript Quickstart'
        }),
        CSSPlugin(),
        this.isProduction && QuantumPlugin({
          polyfills: ['Promise'],
          treeshake: true,
          uglify: true
        })
      ]
    });
  }

  createBundle(fuse) {
    // Creates vendor libs bundle
    fuse.bundle('vendor').instructions('~ index.tsx');

    // Project files bundle
    const app = fuse.bundle('app');

    if (!this.isProduction) {
      app.hmr();
      app.watch();
    }

    app.instructions('> [index.tsx]');

    return app;
  }
});

// Removing dist directory
task('clean', () => src('dist').clean('dist').exec());

// Moving content of /public directory to /dist
task('copy', () => src('**/**.**', { base: 'public' }).dest('dist').exec());

// Default task, ran when no other is specified
task('default', ['clean', 'copy'], async context => {
  const fuse = context.getConfig();

  fuse.dev({
    open: true,
    port: 5000
  });

  context.createBundle(fuse);

  await fuse.run();
});

// Production build task with all optimizations enabled, such us uglify and hashed filenames
task('build', ['clean', 'copy'], async context => {
  context.isProduction = true;
  const fuse = context.getConfig();

  context.createBundle(fuse);

  await fuse.run();
});
