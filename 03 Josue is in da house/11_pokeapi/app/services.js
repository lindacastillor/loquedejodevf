(function(){
	'use strict';

	angular
		.module('pokemonModule')
		.factory('pokemones', pokemones);

	pokemones.$inject = ['$resource'];

	function pokemones($resource){
		return $resource('http://pokeapi.co/api/v2/pokemon/:pokeParametro',{},{})
	}
})();
