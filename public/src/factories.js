angular.module('ContactsApp')
     .factory('Contact' , function ($resource){
         return $resource('/api/store/:id', {id: '@id'},{
             'update':{method:'PUT'}
         });
     }); 