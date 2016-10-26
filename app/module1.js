function Hero(id,name){
	this.id = id;
	this.name = name;
}

//单独打包为一个单独的chunk,常用于按需加载，code split
require.ensure([],function(){
	require('./router1');
})

module.exports = Hero;