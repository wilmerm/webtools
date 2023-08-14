export default {
  optimizeDeps: {
    keepNames: true,
  },
  build: {
    minify: false,
    rollupOptions: {
      input: './src/main.ts',
      output: {
        entryFileNames: 'webtools.js',
        chunkFileNames: '[name].js',
        format: 'umd', // Universal Module Definition
        name: 'simple-webtools',
      },
    },
  },
};
