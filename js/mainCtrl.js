angular.module("friendsList")
       .controller('mainCtrl', function($scope){
          $scope.friends = ['Jordyn','Ryan','Chelsey'];
          $scope.addFriend = function(name){
              $scope.friends.push(name);
          }


});