const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {  
    entry: {
        name: path.resolve(__dirname, './src/index.js')
    },

    output: {

        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'Esquiova virus',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module : {
        rules:[
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            //Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/,
                type: 'asset/resource'
            },
            //Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
            //CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: [miniCssExtractPlugin, 'css-loader', 'sass-loader']
            }
        ],
    },

    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist')
        },        open: true,
        compress: true,
        hot: true,
        port: 9000
    }
};
