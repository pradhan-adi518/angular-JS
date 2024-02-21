<!DOCTYPE html>
<html>
    
    <head>
        <title>AJS Simple Calculator</title>
        <script src="a.js"></script>
        <script>
            var app=angular.module("calcApp",[]);
            app.controller("calcCntrl",function($scope)
            {
                $scope.num1=10
                $scope.num2=10
                $scope.result=0
                $scope.operator="add"
                $scope.compute=function()
                {
                    switch($scope.operator)
                    {
                        case 'add': $scope.result=$scope.num1 + $scope.num2
                                    break
                        case 'sub': $scope.result=$scope.num1 - $scope.num2
                                    break
                        case 'mul': $scope.result=$scope.num1 * $scope.num2
                                    break
                        case 'div': if($scope.num2==0)
                                    {
                                        alert("Divide by zero error")
                                    }
                                    else
                                    {
                                        $scope.result=$scope.num1/$scope.num2
                                    }
                        
                    }
                }
            });
        </script>
    </head>
    <body ng-app="calcApp">
        <h1>Angular JS Simple Calculator</h1>
        <div ng-controller="calcCntrl">
            Enter First Number: <input type="number" ng-model="num1">
            Select Operator:<select ng-model="operator">
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="mul">*</option>
                <option value="div">/</option>
                
                </select>
            Enter Second Number:<input type="number" ng-model="num2">
            <button ng-click="compute()">Compute</button>
            <br/>
            <b>{{num1 + " "+operator+ " "+ num2+ "="+result}}</b>
        </div>
    </body>
</html>
