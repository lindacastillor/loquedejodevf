(function(){
	'use strict'

	var character = {
		template : `<h1 ng-bind="$ctrl.character.name"></h1>
					<div ng-repeat="obj in $ctrl.character">
						<h3>{{obj.height}}</h3>
					</div>

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

	characterCtrl.$inject = ["planets"];

	function characterCtrl(planets){
		var ch = this;
		ch.character = planets.get({'id' : ch.id, 'type' : ch.type });
	}


})();
