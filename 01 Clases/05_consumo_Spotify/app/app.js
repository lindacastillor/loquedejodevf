/* IIFE */

(function(){
	angular
		.module('spotify', ['ngResource'])
		.factory('spotifySearch', spotifySearch)

		spotifySearch.$inject = ['$resource'];

		function spotifySearch($resource){
			return $resource("https://api.spotify.com/v1/search?type=track&market=MX&q=:song");
		}

})();
