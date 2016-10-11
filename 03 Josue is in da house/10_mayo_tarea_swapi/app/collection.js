(function(){
	'use strict';

	var collection = {
		template : `<square
						climate="p.climate"
						ng-repeat="p in $ctrl.planets.results">
					</square>`,
		bindings : {
			'page' : '='
		},
		controller : collectionCtrl
	};

	angular
		.module('starwars')
		.component('collection',collection);

	collectionCtrl.$inject = ['planets'];

	function collectionCtrl(planets){
		var ctrl = this;
		ctrl.planets = planets.get( {'page' : ctrl.page} );
	}

})();
