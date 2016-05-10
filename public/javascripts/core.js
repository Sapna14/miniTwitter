// public/javascripts/core.js

     var twitterClone = angular.module('twitterClone', []);
     twitterClone.controller('mainController', function($scope, $http) {
         $scope.formData = {};
        $scope.createUser = function() {
            console.log("inside the createUser ####",$scope.formData);
            $http.post('/login', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.result = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
    });

    // twitterClone.controller('')

