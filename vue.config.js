let externals = {};
if (process.env.NODE_ENV === "production") {
  externals = {
    zxcvbn: {
      commonjs: "zxcvbn",
      commonjs2: "zxcvbn",
      root: "zxcvbn"
    }
  };
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals
  },
  css: {
    extract: false
  }
};
