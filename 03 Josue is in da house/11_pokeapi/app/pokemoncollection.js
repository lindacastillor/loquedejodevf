(function(){
	'use strict';

	var pokeCollection = {
			// //template : `	<h1>{{$ctrl.pokemons.name}}</h1>`,
			// bindings : {
			// 	'id' : '='
			// },
		controller : pokecollectionCtrl,
		template : `<h1 ng-repeat="pokemon in $ctrl.pokemons.results">
						<p>{{pokemon.name}}</p>
					</h1>`
	};

	angular
		.module('pokemonModule')
		.component('pokeCollection', pokeCollection );

	pokecollectionCtrl.$inject = ['pokemones'];

	function pokecollectionCtrl(pokemones){
		var ctrl = this;
		ctrl.pokemons = pokemones.get({ 'pokeParametro' : ctrl.id });
	}

})();
