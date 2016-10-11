(function(){
	'use strict'

	angular
		.module("marvel")
		.factory("apiMarvel",apiMarvel)

		function apiMarvel($resource){
			var apiKey = "apikey"//llave publica
			var hash = ""
			return $resource("http:")
		}//public hash timestamp
})();
