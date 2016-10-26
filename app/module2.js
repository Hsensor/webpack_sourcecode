function Person(){

}

//单独打包为一个单独的chunk,常用于按需加载，code split
require.ensure([],function(){
	require('./router2');
})

module.exports = Person; 
