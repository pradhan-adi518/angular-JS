<!DOCTYPE html>
<html ng-app="crudApp">
    <head>
        <title>AngularJS CRUD Application</title>
        <script src="a.js"></script>
        <script>
            var app = angular.module('crudApp', []);
            app.controller('crudController', function ($scope) {
            $scope.users = [
            { name: 'Ram', age: 25 },
            { name: 'Sam', age: 30 },
            ];
            $scope.addUser = function () {
            $scope.users.push({ name: $scope.name, age: $scope.age });
            $scope.name = '';
            $scope.age = '';
            };
            $scope.editUser = function (user) {
            var index = $scope.users.indexOf(user);
            // Prompt for updated values with validation
            var updatedName = prompt('Enter updated name:', user.name);
            var updatedAge = prompt('Enter updated age:', user.age);
            // Check if the user pressed cancel
            if (!(updatedName == null && updatedAge == null) ){
            // Update the user
           var updatedUser = { name: updatedName, age: updatedAge};
            $scope.users.splice(index, 1, updatedUser);
            }
            };
            $scope.deleteUser = function (user) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
            };
            });
        </script>
    </head>
    <body ng-controller="crudController">
        <h1>User Management</h1>
        <!-- Form for adding a new user -->
        <form ng-submit="addUser()">
            Name:
            <input type="text" ng-model="name" required>
            <br>
            Age:
            <input type="number" ng-model="age" required>
            <br>
            <button type="submit">Add User</button>
        </form>
        <br>
        <!-- Table to display user information -->
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="user in users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td><button ng-click="editUser(user)">Edit</button>
                    <button ng-click="deleteUser(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
