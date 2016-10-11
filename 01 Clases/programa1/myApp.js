/*IIFE*/
(function(){
	'use strict'

	angular
		.module('myApp', [])
		.controller('myController', myController);

		function myController()
		{
		var first = this;
		first.name = "Joel Martinez";
		first.number = 4;
		first.age = 0;
		first.people =[
			{"name":"Josue", "age":11, "place":"Mexico"},
			{"name":"Alex", "age":23, "place":"USA"},
			{"name":"Martin", "age":45, "place":"New Zeland"},
			{"name":"David", "age":30, "place":"Francia"},
		];

		first.clickeame = function (){
			first.age += 1;
		}

		first.addage = function (person){
			person.age += 1;
		}

	}
})();
