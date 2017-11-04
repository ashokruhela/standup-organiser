const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.config.js');
module.exports = merge(config, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    devtool: 'source-map'
})