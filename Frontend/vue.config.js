// vue.config.js
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../../PostBoxServer/frontend"),
  devServer: {
    disableHostCheck: true,
  },
};
