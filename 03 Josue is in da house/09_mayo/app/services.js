(function(){
	'use strict';

	/*no llamar ng  a ningun modulo*/
	angular
		.module('starwars')
		.factory('api',api );

	api.$inject = ['$resource'];

	function api($resource){
		return $resource('http://swapi.co/api/:type/:id',{},{});
	}

})();
