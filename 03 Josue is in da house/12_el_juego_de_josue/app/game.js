(function(){
	'use strict'

	var game = {
		template : `
			<div class="square" ng-repeat="memory in $ctrl.momories track by $index">
			</div>
		`,
		binding : `
			squares : '='
		`,
		controller : gameCtrl

	}

	angular
		.module('fred')
		.component('game', game);
})();
