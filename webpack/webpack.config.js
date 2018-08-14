const  path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./webpack_config/entry_webpack');
const CpoyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:"http://127.0.0.1:8081/"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
               use:ExtractTextPlugin.extract({
                   fallback:"style-loader",
                   use:[{
                       loader:'css-loader',
                       options:{importLoaders:1}
                   },'postcss-loader']
               })
            },
            {
            test:/\.(png|jpg|jpeg|gif)$/i,
                use:[{
                loader:'url-loader',
                    options:{
                    limit:500,
                        outputPath:'image/'
                    }
                }]
          },
            {
            test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss$/i,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(jsx|js)$/i,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env",'react'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            filename:'index2.html',
            chunks:['index2'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index2.html'
        }),
        new HtmlPlugin({
            filename:'index1.html',
            chunks:['index1'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index1.html'
        }),
        new ExtractTextPlugin("css/style.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('微创'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CpoyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        compress: true,
        port: 8081,
        hot:true,
        open:true
    }
};
