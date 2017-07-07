angular.module('ContactsApp')
.value('FieldTypes',{
    text:['Text','should be text'],
     email:['Email','should be email address'],
      phone:['Phone','should be a number'],
       date:['Date','should be a date'],
        datetime:['Datetime','should be a datetime'],
         time:['Month','should be time'],
          url:['URL','should be a Url'],
           color:['Color','should be a color']
})

.directive('formField', function($timeout, FieldTypes){
    return{
        restrict:'EA',
        templateUrl:'views/form-field.html',
        replace:true,
        scope:{
            record:'=',
            field:'@',
            live:'@',
            required:'@'

        },
        link: function($scope,element, attr){
            $scope.types=FieldTypes;

            $scope.remove=function(field){
               delete $scope.record[field];
               $scope.blurUpdate();

            };
            $scope.blueUpdate =function(){
                if ($scope.live!=='fales'){
                    $scope.record.$update(function (updateRecord){
                        $scope.record=updatedRecord;

                    });
                }
            };
                    var saveTimeout;
                    $scope.update=function(){
                        $timeout.cancel(saveTimeout);
                        saveTimeout =$timeout($scope.blurUpdate, 1000);

                    };
                }
    
        

    };
})