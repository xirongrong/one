angular
  .module('class1App').controller("xrr",["$scope","$http",function ($scope,$http) {
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