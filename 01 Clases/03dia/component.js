/* IIFE */
(function (){
	'use strict'

	var ejemplo2 = {
		controller : componentController,
		template : `
			<div>
				<p>
					{{$ctrl.param}}
				</p>
			</div>
	`
	};

	function componentController() {
		var asController = this;
		asController.param = Math.random();
	};

	angular
		.module('component')
		.component('ejemplo2',ejemplo2);
})();
