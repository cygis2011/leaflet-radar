const path = require('path');
const webpack = require('webpack');
module.exports = [{
    mode: 'production', // development production
    context: __dirname,
    entry: ['./src/L.Radar.js'],/* 入口文件模块路径 */
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'cheap-module-source-map',
    devtool: 'source-map',
    amd: {
        toUrlUndefined: true
    },
    module: {
        unknownContextCritical: false,
        rules: [{
            test: /\.css$/,
            use: ['vue-style-loader', 'style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ],
        },
        // {
        //     test: /\.js$/,
        //     exclude: /(node_modules|bower_components)/,//排除掉node_module目录
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/env', '@vue/cli-plugin-babel/preset'], //转码规则
        //             // plugins:['transform-runtime']
        //         }
        //     }
        // },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use:{
                loader:'url-loader',
            }
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml)$/,
            use:{
                loader:'url-loader'
            }
        }]
    },
    plugins: [
      
    ],
    // development server options
    devServer: {
        //允许绑定本地域名
        disableHostCheck: true,
        allowedHosts: [
            'cmsdemo.test.novasky.cn'
        ],
        host: '0.0.0.0',
        contentBase: path.join(__dirname, "dist"),
        open: true,  // 自动打开浏览器
        port: 8083, // 端口号
        hot: true,  //热更新
        proxy: {
            '/api': {
                target: "http://192.168.88.45/",
                secure: false
            }
        }
    }
}];