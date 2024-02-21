<!DOCTYPE html>
<html>
    <title>Student Details Application</title>
    <head>
        <script src="a.js"></script>
        <script>
            var app=angular.module("studDetailsApp",[]);
            app.controller("studDetailsAppCntrl",function($scope)
            {
                $scope.generateData=function()
                {
                    $scope.studData=[]
                    for(var i=1;i<=$scope.num;i++)
                    {
                        var stud={
                                    "SLNO":i,
                                    "NAME":'Student-'+i,
                                    "CGPA":(Math.random()*10+1).toFixed(2)
                                 }
                        $scope.studData.push(stud)
                    }
                }
            });
        </script>
    </head>
    <body ng-app="studDetailsApp">
        <h1>Student Details Application</h1>
        <div ng-controller="studDetailsAppCntrl">
            Enter the Number of Students to Generate the Data: 
            <input type="number" ng-model="num">
            <button ng-click="generateData()">Generate</button>
            <br/>
            <table border="1" ng-show="studData.length>0">
                <tr>
                    <th>SLNO</th>
                    <th>NAME</th>
                    <th>CGPA</th>
                </tr>
                <tr ng-repeat="student in studData">
                    <td>{{student.SLNO}}</td>
                    <td>{{student.NAME}}</td>
                    <td>{{student.CGPA}}</td>
                </tr>
            </table>
            <br/>
            Number of Students={{studData.length}}
        </div>
    </body>
</html>


<!--6. Develop an Angular JS program to create a simple to-do list application. Allow users to add, edit and delete tasks. Note: The default values for tasks may be included in the program.-->
<!DOCTYPE html>
<html ng-app="todoApp">
    <head>
        <title>AngularJS Todo List</title>
        <script src="a.js"></script>
        <script>
            var app = angular.module('todoApp', []);
            app.controller('todoController', function ($scope) {
            $scope.tasks = [ 'Task 1','Task 2','Task 3'];
            $scope.newTask = '';
            $scope.editingTaskIndex = null;

            $scope.addTask = function ()
            {
                $scope.tasks.push($scope.newTask);
                $scope.newTask = '';
            };

            $scope.editTask = function (task)
            {
                var index=$scope.tasks.indexOf(task)
                // Prompt for updated task with validation
                var updatedTask = prompt('Enter updated task:',task);
                // Check if the user pressed cancel
                if (updatedTask !== null) {
                // Update the task
                $scope.tasks.splice(index, 1, updatedTask);
            }
            };

            $scope.deleteTask = function (index)
            {
                $scope.tasks.splice(index, 1);
            };
            });
        </script>
    </head>

    <body ng-controller="todoController">
        <h1>Todo List</h1>
        <!-- Form for adding a new task -->
        <form ng-submit="addTask()">
            Task:
            <input type="text" ng-model="newTask" required>
            <button type="submit">Add Task</button>
        </form>
        <br>
        <!-- Table to display task information -->
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="task in tasks">
                    <td>{{ task }}</td>
                    <td>
                        <button ng-click="editTask(task)">Edit</button>
                        <button ng-click="deleteTask($index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
