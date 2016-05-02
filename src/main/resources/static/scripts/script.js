// script.js

// Let's do this in strict mode to encourage good habits :)
"use strict";

// Initialize the angular module
var tbAppMod = angular.module('tbApp', ['ngRoute']);

// Configure the routes
tbAppMod.config(function($routeProvider) {
// tbAppMod.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
  	templateUrl: 'pages/home.html',
  	controller: 'mainController'
  })

  .when('/about', {
  	templateUrl: 'pages/about.html',
  	controller: 'aboutController'
  })

  .when('/tideChart', {
  	templateUrl: 'pages/tideChart.html',
  	controller: 'tideChartController'
  })

});

// Initialize the controller
tbAppMod.controller('mainController', function($scope) {
  $scope.message = 'Single Page Application w/ Responsive Design';
});

tbAppMod.controller('tideChartController', function($scope, $http) {
  $scope.message = 'Tide Chart GUI';

  // Load TideData into $scope.tideData
  TideDataCtrlAjax($scope, $http);

  // Next round test data (matching JSON format from api call)
  var tideData = [{
                "id":333,
                "time":"2016-03-26 22:46:00.0",
                "height":3.1,
                "locationId":64000
              },{
                "id": 334,
                "time": "2016-03-27 04:35:00.0",
                "height": 0.8,
                "locationId": 64000
              },{
                "id":335,
                "time":"2016-03-27 10:58:00.0",
                "height":3.1,
                "locationId":64000
              },{
                "id":336,
                "time":"2016-03-27 16:57:00.0",
                "height":0.7,
                "locationId":64000
              },{
                "id":337,
                "time":"2016-03-27 23:22:00.0",
                "height":3.1,
                "locationId":64000
              },{
                "id":338,
                "time":"2016-03-28 05:13:00.0",
                "height":0.8,
                "locationId":64000
              }];

  // Load the tideChart with test data specified
  tideChartD3( tideData );
});

// tbAppMod.directive("myStatus", function() {
//     return {
//         restrict: "E",
//         replace: true,
//         template: "<object type='image/svg+xml' data='../scripts/SVG/status.svg'></object>",
//         link: function (scope, element, attrs) {
//             var statusChanged = function(newValue, oldValue) {
//                 var statusElm = angular.element(element[0].getSVGDocument().getElementById("status"));
//                 statusElm.removeClass(oldValue);
//                 statusElm.addClass(newValue);
//             };
//             scope.$watch(attrs.watch, statusChanged);
//         }
//     }
// });

var TideDataCtrlAjax = function($scope, $http) {
    $http({method: 'GET',
              url: '../tideData/next24Hours',
              username: 'user',
              password: 'asdf'})
        .success(
            function(data) {
                $scope.tideData = data.slice(); // response data
            }
        );
};

// this is an example I'm following to get the svg to update via Angular
tbAppMod.directive("myStatus", function() {
    return {
        restrict: "E",
        replace: true,
        template: "<object type='image/svg+xml' data='../scripts/SVG/status.svg'></object>",
        link: function(scope, element, attrs) {
            var statusChanged = function(newValue, oldValue) {
                var elm = element[0];
                var svgDocument = elm.getSVGDocument();
                var elmWithIdStatus = svgDocument.getElementById("status");
                var statusElm = angular.element(elmWithIdStatus);
                statusElm.removeClass(oldValue);
                statusElm.addClass(newValue);
            };
            scope.$watch(attrs.watch, statusChanged);
        }
    }
});

