const path = require('path');

// Modyle system CommonJS (node.js)
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'buildpack.js',
        path: path.resolve(__dirname, './buildpack')
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }],

    },

};