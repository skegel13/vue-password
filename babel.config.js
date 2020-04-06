module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      },
      "@vue/app",
      {
        useBuiltIns: false,
        polyfills: false
      }
    ]
  ]
};
