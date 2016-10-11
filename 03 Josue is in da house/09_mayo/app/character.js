(function(){
	'use strict'

	var character = {
		template : `<h1 ng-bind="$ctrl.character.name"></h1>
					<p ng-if="$ctrl.character.height"
						ng-bind-template="Altura: {{$ctrl.character.height}}"></p>
					<p ng-if="$ctrl.character.climate"
						ng-bind-template="Clima: {{$ctrl.character.climate}}"
						ng-class="{
							'blue' : $ctrl.character.climate == 'frozen',
							'orange' : $ctrl.character.climate == 'temperate'
						}">
					</p>
					`,
		bindings : {
			'id' : '=',
			'type' : '='
		},
		controller : characterCtrl
	};

	angular
		.module('starwars')
		.component('starWarsCharacter', character);

	characterCtrl.$inject = ["api"];

	function characterCtrl(api){
		var ch = this;
		ch.character = api.get({'id' : ch.id, 'type' : ch.type });
	}


})();
