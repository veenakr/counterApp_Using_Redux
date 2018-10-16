const path = require('path');

module.exports = {
    entry: "./src/app.js",
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}