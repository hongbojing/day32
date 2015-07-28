angular.module('myApp',[])
.controller("ColorController",function($scope,$timeout){
  var updateColor=function(){
    $scope.arrayLength=Math.floor(Math.random()*100);
    $scope.colorArray=new Array($scope.arrayLength);
    for(var i=0;i<$scope.arrayLength;i++){
      $scope.colorArray[i]=Math.floor(Math.random()*100);
    }
    $timeout(function(){
      updateColor();
    },2000);
  };

  updateColor();
})
;
