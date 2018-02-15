//We have to define our application first
angular.module("toDoList", [])

/*Controller is like a brain of our app. It contain models and logics required
  to operate our to do list.
*/
    .controller("toDoListCtrl", ['$scope',
        function($scope) {
            //A model holding tasks
            $scope.taskList = [
                {done: true,
                    task: 'Do nothing'
                },
                {
                    done: false,
                    task: 'Show some tasks'
                },
                {
                    done: false,
                    task: 'Add a task'
                },

            ];

            //Function for adding task to the task list
            $scope.addTask = function(task) {

                //I'm pushing a new task to the task list
                $scope.taskList.push({
                    done: false,
                    task: task
                });
            };
            $scope.delTask = function(task) {

                //I'm pushing a new task to the task list
                $scope.taskList.splice({
                    done: false,
                    task: task
                });
            };

        }
    ]);