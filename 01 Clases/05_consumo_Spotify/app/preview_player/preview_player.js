/* IIFE */
(function(){
	'use strict'

	var spotifyPlayer = {
		controller : spotifyController,
		template : `
			<section class="spotify-player">
				<div class="search">
					<form ng-submit="$ctrl.search()">
					<input ng-model="$ctrl.song_name"><button>Search track</button>
					<form>
				</div>
				<div class="player" ng-if="$ctrl.playlist">
					<div class="results">
						<a ng-click="$ctrl.play(song)" ng-repeat="song in $ctrl.playlist" class="song">
							<span class="title">{{song.name}}</span>
							<span>{{$ctrl.milliseconds( song.duration_ms ) }}</span>
							<span>{{song.artists[0].name}}</span>
						</a>
					</div>
					<div class="song-detail">
						<div class="header">
							<img ng-src="{{$ctrl.song.album.images[2].url}}"/>
							<span class="title">{{$ctrl.song.name}}</span>
							<span>Duration: {{$ctrl.milliseconds($ctrl.song.duration_ms) }}</span>
							<span>Popularity: {{$ctrl.song.popularity}}</span>
							<span>Album: {{$ctrl.song.album.name}}</span>
							<span>{{$ctrl.song.artists[0].name}}</span>
						</div>
					</div>
				</div>
			</section>
		`
	}

	spotifyController.$inject = ['spotifySearch'];

	function spotifyController(spotifySearch){
		var spotify = this;
		spotify.playlist = null;
		spotify.song   = null;
		spotify.audio  = new Audio;
		spotify.play   = play;
		spotify.search = search;
		spotify.milliseconds = milliseconds;

		function milliseconds(ms){
			var min = Math.floor((ms/1000/60) << 0);
			var sec = Math.floor((ms/1000) % 60);
			return min+":"+sec;
		}

		function play(song){
			spotify.song = song;
			spotify.audio.pause();
			spotify.audio.src = song.preview_url;
			spotify.audio.play();

		}

		function search(){
			spotifySearch.get().$promise.then(function(response){
				spotify.playlist = response.tracks.items;
				spotify.play(response.tracks.items[0]);
			});
		}
	}

	angular
		.module('spotify')
		.component('spotifyPlayer',spotifyPlayer);

})();
