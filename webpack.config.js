const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/pages/index/index.js',
        bfc: './src/pages/bfc/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js', // 对应下面的文件名字 filename: 'bfc.html',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: { //开发服务器配置
        contentBase: './dist', //配置服务器启动跳到dist目录默认是根目录  
        port: '3000', //端口号
        compress: true,//服务器压缩
        open: true,//打开的时候自动弹出浏览器
        hot: true,//局部更新,新加的内容
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: './src/pages/index/index.html',
            hash: true,
            filename: 'index.html',

        }),
        new HtmlWebpackPlugin({
            chunks: ['bfc'],
            template: './src/pages/bfc/bfc.html',
            hash: true,
            filename: 'bfc.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader', options: {}
                    }
                ]
            },
            {
                test: /\.scss$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env"],
                        "plugins": [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: { reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts'] }
            },
            {
                test: /\.(png|jpg|gif)$/, use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }, {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            }

        ]
    }
}