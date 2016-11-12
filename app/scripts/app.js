'use strict';

/**
 * @ngdoc overview
 * @name class1App
 * @description
 * # class1App
 *
 * Main module of the application.
 */
angular
  .module('class1App', ["ui.router"]).controller("app",["$scope","$http",function ($scope,$http) {
  	
  }])
.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
	$stateProvider.state("b",{
		url:"/b",
		templateUrl:"views/b.html",
		controller:"xrr"
		
	})
	.state("c",{
		url:"/c",
		templateUrl:"views/c.html",
		controller:"xrr1"
	})
}])

 
