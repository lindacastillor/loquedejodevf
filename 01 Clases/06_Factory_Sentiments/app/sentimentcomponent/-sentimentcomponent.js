
(function(){
	'use strict';

var sentimentAnalyser = {
    templateUrl: "./app/sentimentcomponent/sentimentcomponent.html",
    controller : sentimentAnalyserController
  };

angular
    .module('sentiment')
    .component('sentimentAnalyser', sentimentAnalyser);

	function sentimentAnalyserController(sentimentSearch){
    var sentiment = this;
	sentiment.search= search;
	sentiment.type = null;
	sentiment.score = null;
	sentiment.keywords = null;


    function search(){
      sentimentSearch.get({'text': sentiment.text})
        .$promise.then(function(response){
			sentiment.type = response.type;
			sentiment.score = response.score;
			sentiment.keywords = response.keywords;
      });
    }

  }

})();
