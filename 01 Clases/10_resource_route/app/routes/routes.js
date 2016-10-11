(function(){
	'use strict'

	angular
		.module('marvel')
		.config(configuration);

		function configuration($routeProvider){
			$routeProvider
				.when('/',{
					template: ''
				})
				.otherwise({
					redirectTo: '/'
				});
		}
})();
