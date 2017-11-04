const path = require('path');
const webpack = require('webpack');
const HthmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom' ]

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /nod_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HthmlWebpackPlugin({
            title: 'Digital access standup Organiser',
            template: './src/index.ejs'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}