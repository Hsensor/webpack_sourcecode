define(function(module,exports,require){
	module.exports = [{
		path:"/dashboard",
		resolve:function(){
			require(["./dashboard"],function(){

			})
		}
	}]
})