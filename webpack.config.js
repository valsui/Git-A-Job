const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: path.join(__dirname, './js/wheel.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './js')
    },
    plugins: [
        new webpack.ProgressPlugin()
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'js/index.html'
        // })
    ],
    devtool: 'source-map'
}

module.exports = config