var webpack = require('webpack');
module.exports = {
  entry:{
    main:"./app/entry1.js",
    main1:'./app/entry2.js',
    common:['./app/common_module.js'],
    test_common:['./app/test_common.js']
    //生成3个对应的js文件
  },
  //entry:['./app/entry1.js','./app/entry2.js'],//生成一个main.js
  output:{
    path:__dirname+"/dist",
    filename:'[name].js'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:['test_common'],//将test_common加入chunk的文件
      filename:'common.js',//生成文件
      minChunks:3
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}