const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/game.js",
    output: {
        path: path.resolve(__dirname, "bundled"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 9000
      }
}