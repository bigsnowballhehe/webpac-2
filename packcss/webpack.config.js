const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {

        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    ],

    mode: 'development',


}