const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader',
                { loader: 'image-webpack-loader', options: { disable: true } }]
            },
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.mp4$/,
                use: 'file-loader',
            },
        ]},
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                filename: 'index.html',
            }),
        ],
        devServer: {
            watchFiles: path.join(__dirname, 'src'),
            port: 9000,
        },
    }