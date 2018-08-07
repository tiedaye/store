const  path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js',
        'index1':'./src/index1.js'
    },
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
                   use:"css-loader"
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
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            filename:'index.html',
            chunks:['index'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
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
     new ExtractTextPlugin("css/style.css")
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
