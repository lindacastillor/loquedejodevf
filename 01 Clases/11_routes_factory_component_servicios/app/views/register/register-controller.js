(function(){
	'use strict'

	angular
		.module('todoapp')
		.controller("registerCtrl", registerCtrl);

	registerCtrl.$inject = ['Auth', '$location'];

	function registerCtrl(Auth, $location) {
		var register = this;

		register.register = function (){

			Auth.$createUser({
				email : register.email,
				pasword : register.password
			}).then(function(userData){
				console.log("User created with id:", usesrData);
				$location.path("/login");
			}).catch(function(error) {
				console.log(error);
			});

		}
	}
})();
