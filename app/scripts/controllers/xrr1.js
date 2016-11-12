angular
  .module('class1App').controller("xrr1",["$scope","$http",function ($scope,$http) {
  	
  	$scope.fn=function(){
  		$http({
  			url:'http://www.somenote.cn:1602/list1',
  			method:'get'
  		}).success(function(e){
  			debugger
  			$scope.data=e;
  		})
  	}
  }])