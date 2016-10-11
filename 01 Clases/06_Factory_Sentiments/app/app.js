(function(){
	'use strict';

	angular
		.module('sentiment',['ngResource'])
		.factory('sentimentSearch', sentimentSearch);

	sentimentSearch.$inject = ['$resource'];

	function sentimentSearch($resource){
		return $resource("https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=:text",
			{},
			{
				get: {
					method: 'GET',
					headers: { 'X-Mashape-Key': 'JY8hscS049mshlkMkFZgSnnwUJGip1oi2KrjsnUfgjhPBR4UOh' }
					}
			});
	}

})();
