angular.module('myApp',[])
.controller("ColorController",function($scope,$timeout){

  //name the function
  var updateColor=function(){
    $scope.arrayLength=Math.floor(Math.random()*100);
    $scope.colorArray=new Array($scope.arrayLength);
    for(var i=0;i<$scope.arrayLength;i++){
      $scope.colorArray[i]=Math.floor(Math.random()*100);
    }

    //set the time cycle
    $timeout(function(){
      updateColor();
    },2000);
  };

  //execute the function
  updateColor();
})
;
