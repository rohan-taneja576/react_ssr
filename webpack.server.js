const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternal = require("webpack-node-externals");

const config = {
  //Inform Webpack that we are building a bundle for node JS , rather than for the browser
  target: "node",
  //Tell webpack the root file of our server application
  entry: "./src/index.js",
  //Tell Webpack where to put the output that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternal()],
};

module.exports = merge(baseConfig, config);
