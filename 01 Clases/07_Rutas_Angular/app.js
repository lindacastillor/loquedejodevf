/*IIFE*/
(function(){
	'use strict'

	angular
		.module('rutas',['ngRoute']);

		$(document).ready(function(){
			$('.slider').slider({full_width: true});
		});

})();
