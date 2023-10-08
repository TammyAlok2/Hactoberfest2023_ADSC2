// Define the AngularJS module and controller
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.message = 'Hello, AngularJS!';

  $scope.updateMessage = function() {
    $scope.message = 'Hello, ' + $scope.name + '!';
  };
});
