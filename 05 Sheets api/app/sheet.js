


var myApp = angular.module('chartApp', ["ng-fusioncharts"]);

myApp.controller('chartController', ['$scope', function($scope) {
  $scope.sheetDataSource = {
	chart: {},
	data: []
  };
  $.get({
	url: 'https://spreadsheets.google.com/feeds/list/187iKB7ekhP96evCySKBWy5LfWErrJDono-8glzFPcCY/od6/public/basic?alt=json',
	success: function(revenueData) {

	  var data = revenueData.feed.entry,
		revenueDataLength = data.length,
		chartData = [],
		datum;

	  for (var i = 0; i < revenueDataLength; i++) {
		datum = data[i];
		chartData.push({
		  label: datum.title.$t,
		  value: datum.content.$t.replace('revenue: ', '')
		});
	  }
	  $scope.$apply(function() {

		$scope.sheetDataSource = {
		  chart: {
			"caption": "Revenue Split - Walmart",
			"captionFontColor": "#000",
			"decimals": "0",
			"captionFontSize": "22",
			"baseFont": "Open Sans",
			"baseFontColor": "#000",
			"numberPrefix": "$",
			"paletteColors": "#5793F3,#FFDC33,#5CB042,#DD4D79, #F92182, #5CB042",
			"bgColor": "#FFFFFF",
			"showBorder": "0",
			"use3DLighting": "0",
			"showShadow": "0",
			"enableSmartLabels": "0",
			"startingAngle": "310",
			"showLabels": "0",
			"showPercentValues": "1",

			// legend customizations
			"showLegend": "1",
			"legendShadow": "0",
			"legendBorderAlpha": "0",
			"legendItemFontSize": "15",
			"labelFontSize": "13",
			"labelFontBold": "1",

			// tooltip customizations
			"toolTipBgColor": "#000",
			"toolTipPadding": "15",
			"toolTipBorderRadius": "3",
			"toolTipBorderThickness": "1",
			"toolTipBorderColor": "#ccc",
			"toolTipBgAlpha": "70",
			"showPercentValueInToolTip": "1",
			"plotToolText": "<div style='color:#FFF; font-size: 14px;'>$label: $percentValue</div>"
		  },

		  data: chartData
		};
	  });
	}
  });
}]);
