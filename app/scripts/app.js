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
  	$scope.fn=function(){
  		$http({
  			url:'http://www.somenote.cn:1602/list1',
  			method:'get'
  		}).success(function(e){
  			debugger
  			$scope.data=e;
  		})
  	}
  	$scope.fn1=function(){
  		$http({
  			url:'http://www.somenote.cn:1602/list2',
  			method:'get'
  		}).success(function(a){
  			debugger
  			$scope.da=a;
  		})
  	}
  }])
.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
	$stateProvider.state("a",{
		url:"/a",
		templateUrl:"views/a.html"
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

 
