/* IIFE */
(function(){
	'use strict';

	var sentimentAnalyser = {
		template : `
		<section>
			<form ng-submit="$ctrl.search()">
				<input ng-model="$ctrl.text"><button>Analyse</button>
			<form>

			<p>{{$ctrl.type}}</p>
			<p>{{$ctrl.score}}</p>
			<ul>
				<li ng-repeat="keyword in $ctrl.keywords">
					Keyword : {{keyword.word}} - Score : {{keyword.score}}
				</li>
			</ul>
		</section>
		`
		,
		controller : sentimentAnalyserController
	};

	angular
		.module('sentiment')
		.component('sentimentAnalyser', sentimentAnalyser);

	function sentimentAnalyserController(sentimentSearch){
			var sentiment = this;
		sentiment.type = null;
		sentiment.score = null;
		sentiment.keywords = null;

		var search = function(){
			sentimentSearch.get({'text': sentiment.text})
				.$promise.
			then(function(response){
			sentiment.type = response.type;
			sentiment.score = response.score;
			sentiment.keywords = response.keywords;
			});
		}
		sentiment.search= search;
	};

})();
