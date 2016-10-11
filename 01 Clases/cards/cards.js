(function (){
	'use strict'

	var cards = {
		controller : card,
		template : `
			<div class="row">
				<div class="col s4" ng-repeat="obj in $ctrl.collection">
					<div class="card">
						<div class="card-image">
							<img ng-src="{{obj.img}}">
							<span class="card-title">{{obj.title}}</span>
						</div>
						<div class="card-content">
							<p>{{obj.opening_crawl}}</p>
						</div>
						<div class="card-action">
							<a href="#">This is a link</a>
						</div>
					</div>
				</div>
			</div>
		`
	}

	function card() {
		var asCard = this;

		asCard.collection = [
			{
				"title": "Cats Images",
				"episode_id": 4,
				"img" : "http://lorempixel.com/500/650/cats/",
				"opening_crawl": "foto gatos",
				"director": "George Lucas",
				"producer": "Gary Kurtz, Rick McCallum",
				"release_date": "1977-05-25"
			},
			{
				"title": "Dogs Images",
				"size": 2,
				"img" : "http://lorempixel.com/500/650/random/",
				"opening_crawl": "foto random",
				"director": "George Lucas",
				"producer": "Rick McCallum",
				"release_date": "2002-05-16"
			},
			{
				"title": "Sports Images",
				"episode_id": 1,
				"img" : "http://lorempixel.com/500/650/sports/",
				"opening_crawl": "foto ciudad",
				"director": "George Lucas",
				"producer": "Rick McCallum",
				"release_date": "1999-05-19"
			}
		];
	};

	angular
		.module('devfapp')
		.component('cards',cards)
})();
