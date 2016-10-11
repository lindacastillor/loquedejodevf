/* IIFE */
(function (){
	'use strict'

	angular
		.module('rutas') //module, onfig, factory son funciones
		.config(configuration);

		function configuration($routeProvider){
			$routeProvider
				.when('/',
				{
					template : `hola mundo`
					/*templateUrl : "pathToHtml,"
					controller : myContreller,
					controllerAs : controller,
					resolve : {
						data : function(){
							//Debe regresar un promise
					}
				}*/
				})
				.when('/slider',
				{
					template : "<slider></slider>"
				})
				.when('/cards',
				{
					template : "<cards></cards>"
				})
				.otherwise({
					redirectTo: '/'
				});
		}

})();
