var con=angular.module("con1", []);
con.controller('myCtrl', function($scope,  $window){
    $scope.ShowAlert=function(){
        $window.alert('Hello '  +$scope.Name + ', thank you for signing up to our newsletter ' );
    }

     
    
});