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
	$stateProvider.state("a",{
		url:"/a",
		templateUrl:"views/a.html",
		controller:"xrr"
	})
	.state("a.b",{
		url:"/b",
		templateUrl:"views/b.html"
		
	})
	.state("a.c",{
		url:"/c",
		templateUrl:"views/c.html"		
	})
	$urlRouterProvider.when('','/a');
}])

 
