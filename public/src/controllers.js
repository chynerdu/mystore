angular.module('ContactsApp')
       .controller('ListController',  function($scope, Contact, $location){
           $scope.contacts =Contact.query();
           $scope.fields = [ 'Product Id','Product', 'Price'];

           $scope.sort =function(field){
               $scope.sort.field=field;
               $scope.sort.order= !$scope.sort.order;
           };
           $scope.sort.field='id';
           $scope.sort.order=false;

      $scope.show=function(id){
          $location.url('/store/' +id);
      };
      $scope.move1=function(){
          $location.url('/store');
      };
         $scope.move=function(){
          $location.url('/store/products');
      };
       $scope.move3=function(){
          $location.url('/store'); 
      };
        $scope.move4=function(){
          $location.url('/contact'); 
      };
        $scope.move5=function(){
          $location.url('/notfound'); 
      };
      $scope.move6=function(){
          $location.url('/newproduct')
      };
       $scope.move7=function(){
          $location.url('/list')
      };
          
       })
         .controller('NewController',  function($scope, Contact, $location){
              $scope.contacts =Contact.query();
              $scope.contact =new Contact({
                product:'',
                 price:'',
                  email:['', 'email'],
                   phone:['', 'tel'],
                    description:'',
                     image:'',
                      address:['', 'text']
              });
              $scope.save=function(){
                      $scope.contact.$save();
                      $location.url('/list');
                  };
                
              
          $scope.show=function(id){
          $location.url('/store/' + id);
      };
         $scope.move=function(){
          $location.url('/store/products');
      };
       $scope.move3=function(){
          $location.url('/store'); 
      };
                  $scope.product1=function(){
          $location.url('/store/products') 
      };
         })
            
         .controller('SingleContact' , function($scope, $location, Contact, $uibModal,  $routeParams ){
             $scope.contact=Contact.get({id:parseInt($routeParams.id, 10)
              });
              $scope.delete=function(){
                  $scope.contact.$delete();
                  $location.url('/store')
              };

              $scope.check=function(id){
                  $location.path('store/checkout/');
              };
                 $scope.move=function(){
          $location.url('/store/products'); 
      };
                $scope.move3=function(){
          $location.url('/store'); 
      };
                 $scope.product1=function(){
          $location.url('/store/products')
      };

      
    $scope.isNavCollapsed = true;
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = false;


$scope.alert={};
$scope.show=true;
$scope.Close=function(){
    $scope.show=false;
    
};

  $scope.Names= $scope.Name;
$scope.animationsEnable = true;
$scope.open= function(modalname, email){
    var modalInstance=$uibModal.open({
        animation: $scope.animationsEnable,
        backdrop:'static',
        keyboard:false,
        templateUrl:'orderModal.html',
        controller:'ModalCtrl',
        resolve:{
            name1:function(){
                return modalname
            },
            name2:function(){
                return email
            }
        }
      
    
        
    })
      $location.url('/store');
};

    
            
        
    
           })

            .controller('ModalCtrl' , function($scope, $uibModalInstance, name1, name2){
               $scope.name3=name1; 
               $scope.name4=name2;    
             $scope.ok =function(){
          $uibModalInstance.close();

};
$scope.cancel = function(){
       $uibModalInstance.dismiss('cancel') ;
        $location.url('/store');
};
            })