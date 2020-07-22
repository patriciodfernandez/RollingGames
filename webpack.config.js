const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        administrador: './src/js/administrador.js',
        contacto: './src/js/contacto.js',
        juego1: './src/js/juego1.js',
        juego2: './src/js/juego2.js',
        login: './src/js/login.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['index'],
            filename: './index.html'

        }),
        new HtmlWebpackPlugin({
            template: './src/administrador.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['administrador'],
            filename: './administrador.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/contacto.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['contacto'],
            filename: './contacto.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/error404.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },             
            filename: './error404.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/juego1.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['juego1'],
            filename: './juego1.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/juego2.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['juego2'],
            filename: './juego2.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['login'],
            filename: './login.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/img',
                    to: 'img',
                },

            ]
        })


    ],

};

