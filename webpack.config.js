var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
//var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    indexPage:["./app/entry1.js"],
    loginPage:['./app/entry2.js'],
    test_common:['./app/test_common.js']
    //生成3个对应的js文件
  },
  //entry:['./app/entry1.js','./app/entry2.js'],//生成一个main.js
  output:{
    path:__dirname+"/dist",
    filename:'[name]-[chunkhash:8].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:__dirname+"/dist/index.html",
      template:__dirname+"/app/pages/index.html",
      inject:'body',
      hash:true,
      chunks:['indexPage','common.js']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:['test_common'],//将test_common加入chunk的文件
      filename:'common.js',//生成文件
      minChunks:3
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })*/
    
  ]
}