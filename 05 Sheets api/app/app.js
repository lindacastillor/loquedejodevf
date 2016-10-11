// (function(){
// 	'use strict';
//
// 	angular
// 		.module('googleSheet',['ngResource']);
//
// })();

var app = angular.module('plunker', []);

app.controller('SuperCtrl', ['$scope', '$http', function($scope,$http) {
	var url = 'https://spreadsheets.google.com/feeds/list/11YWG8BKoJ3-XofQoZO_P73eNAXhU1vu51dkFt-DakCM/od6/public/values?alt=json'
	var parse = function(entry) {
	  console.log(entry);
		var category = entry['gsx$apellidod1']['$t'];
		var description = entry['gsx$colore1']['$t'];
		var name = entry['gsx$nombreb1']['$t'];
		var sexo = entry['gsx$sexoc1']['$t'];
		return {
			category: category,
			description: description,
			name: name,
			url: url,
			sexo: sexo
	  };
	}
	$http.get(url)
	.success(function(response) {
		var entries = response['feed']['entry'];
		$scope.parsedEntries = [];
		for (key in entries) {
			var content = entries[key];
			$scope.parsedEntries.push(parse(content));
	  }
	});
}]);
