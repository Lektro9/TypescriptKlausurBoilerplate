// vue.config.js
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../Backend/buildFrontend"),
  devServer: {
    disableHostCheck: true,
  },
};
