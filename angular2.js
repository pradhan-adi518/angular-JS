<html ng-app="myApp">
    <head>
        <title>AngularJS Shopping List</title>
        <script src="a.js"></script>
        <script>
            var app=angular.module('myApp',[])
            var myController=function ($scope) {
            // Default values for shopping items
            $scope.shoppingItems = ['Apples', 'Bananas', 'Bread', 'Milk'];
            // Function to add a new item
            $scope.addItem = function () {
            if ($scope.newItem)
             {
                $scope.shoppingItems.push($scope.newItem);
                $scope.newItem = ''; // Clear the input field after adding
            }
            };
            // Function to remove an item
            $scope.removeItem = function (index)
            {
                $scope.shoppingItems.splice(index, 1);
            };
            };
            app.controller("myCntrl",myController);
    
        </script>
    </head>
    <body ng-controller="myCntrl">
        <h2>Shopping List</h2>
        <table>
            <tr ng-repeat="item in shoppingItems">
                <td>{{ item }}</td>
                <td><button ng-click="removeItem($index)">Remove</button></td>
            </tr>
        </table>
        <!-- Input field and button to add a new item -->
        <input type="text" ng-model="newItem">
        <button ng-click="addItem()">Add Item</button>
    </body>
</html>
