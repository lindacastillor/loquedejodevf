(function(){
	'use strict'

	angular
		.module('practica2')
		.config(configuration);

		function configuration($routeProvider){
			$routeProvider
				.when('/',
				{
					template: `<h3></h3>`
				})
				.otherwise({
					redeirectTo: '/'
				});
		};
})();
