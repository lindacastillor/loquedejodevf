(function(){
	'use strict'

	var pokeCollection2 = {
		template : `<h1 ng-bind="$ctrl.results.name"></h1>
					`,
		bindings : {
			'id' : '=',
			'type' : '='
		},
		controller : characterCtrl
	};

	angular
		.module('pokemonModule')
		.component('pokeCollection2', pokeCollection2);

	characterCtrl.$inject = ["pokemons"];

	function characterCtrl(pokemons){
		var ch = this;
		ch.character = pokemons.get({'id' : ch.id, 'type' : ch.type });
	}


})();
