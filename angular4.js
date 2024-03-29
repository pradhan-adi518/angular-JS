<!DOCTYPE html>
<html>
   
    <head>
        <title> AJS Square and Factorial Application</title>
        <script src="a.js"></script>
        <script>
            var app=angular.module("mySqFct", []);
            app.controller("mySqFctCntrl", function($scope)
            {
                           
                $scope.factorial=function()
                {
                    if($scope.num==0)
                    {
                        $scope.result=1
                    }
                    if($scope.num==1)
                    {
                        $scope.result=1
                    }
                    else
                    {
                        $scope.result=1
                        for(var i=$scope.num; i>=1; i--)
                        {
                            $scope.result=$scope.result*i
                        }
                       
                    }
                }
                $scope.square=function()
                {
                    $scope.result=$scope.num*$scope.num
                }
            });
        </script>
    </head>
    <body ng-app="mySqFct">
        <h1> Angular JS Factorial and Square Application</h1>
        <div ng-controller="mySqFctCntrl">
            Enter the Number: <input type="number" ng-model="num">
            <button ng-click="factorial()">Compute Factorial</button>
            <button ng-click="square()">Compute Square</button>
             <br/>
            {{result}}
        </div>
    </body>
</html>
