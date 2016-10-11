(function(){
	'use strict';

	angular
		.module('googleSheet')
		.factory('sheetFactory', sheetFactory);

	sheetFactory.$inject = ['$resource'];

	function sheetFactory($resource){
		return $resource('https://spreadsheets.google.com/feeds/list/187iKB7ekhP96evCySKBWy5LfWErrJDono-8glzFPcCY/od6/public/basic?alt=json',{},{})
	}
})();
