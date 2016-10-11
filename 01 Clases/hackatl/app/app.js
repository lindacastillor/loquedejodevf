(function(){
	'use strict'

	angular
		.module('bazul', ['ngRoute']);

		// $(document).ready(function(){
		// 	$('.slider').slider({full_width: false});
		// });

		$(document).ready(function(){
			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal-trigger').leanModal();

			$('.slider').slider({full_width: true});
		});
})();
