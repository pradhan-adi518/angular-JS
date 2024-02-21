<!DOCTYPE html>
<html ng-app="myApp">
    
<head>
<title> Angular JS Full Name Pgm </title>
<script src="a.js"> </script>
<script>
var app=angular.module("myApp",[]);
app.controller("myCntrl",function($scope){
$scope.firstName="Harish Kumar"
$scope.lastName="B T"
});
</script>
</head>
<body >
<h2>Anjular JS Application to Display Full Name</h2>
<div ng-controller="myCntrl">
Enter First Name: <input type="text" ng-model="firstName"><br/>
Enter Last Name: <input type="text" ng-model="lastName"><br/>
Your Full Name: {{firstName +" "+ lastName}}
</div>
</body>
</html>
