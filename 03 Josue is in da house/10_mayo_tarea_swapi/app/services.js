(function(){
	'use strict';

	/*no llamar ng  a ningun modulo*/
	angular
		.module('starwars')
		.factory('planets', planets );

	planets.$inject = ['$resource'];

	function planets($resource){
		return $resource('http://swapi.co/api/planets',{},{});
	}

})();
