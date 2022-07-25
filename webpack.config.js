const path = require('path')
const html = require('html-webpack-plugin')

module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|svg)$/,
                type:'asset/resource'
            }
        ]
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
    },
    plugins:[new html({
        template:'./src/index.html'
    })]
}