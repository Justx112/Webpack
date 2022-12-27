const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            { test: /\.mp3$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Сервер не может зацепить index.html если тот имеет другое название
            // и как их даже динамически сцепить не имею представление.
            // Я правильно понял, что для решение такой ситуации
            // надо создать отдельный конфинг и прокидывать его в package.json
            filename: "index.html",
            template: path.resolve(__dirname,"src", "index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000
    }
}
