(function(){
	'use strict';

	var square = {
		template : `<div class="square {{$ctrl.classnames}}"
							ng-class="{
								border: $ctrl.climate == 'frozen'
						}"
					>
					{{$ctrl.climate}}
					</div>`,
		bindings : {
			'climate' : '='
		},
		controller : squareCtrl
	};

	angular
		.module('starwars')
		.component('square', square);

	function squareCtrl(){
		var ctrl = this;
		console.log(ctrl.climate);
		var words = ctrl.climate.split(",");
		console.log(words);
		ctrl.classnames = words.join(" ");
	}

})();
