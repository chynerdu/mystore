 angular.module('ContactsApp',['ui.bootstrap','ngRoute', 'ngResource'])
  .config(function($routeProvider, $locationProvider){
      $routeProvider
      .when('/', {
                    controller:'ListController',
                    templateUrl: 'views/klikstore.html'
                })
                .when('/store', {
                    controller:'ListController',
                    templateUrl: 'views/homepage.html'
                })

                   .when('/klikstore', {
                    controller:'ListController',
                    templateUrl: 'views/klikstore.html'
                })

                .when('/store/products', {
                    controller: 'NewController',
                    templateUrl:'views/products.html'
                })

                .when('/store/:id', {
                    controller:'SingleContact',
                    templateUrl:'views/single_product.html'

                })

                 .when('/store/checkout', {
                    controller:'SingleContact',
                    templateUrl:'views/checkout.html'

                })
                  .when('/contact', {
                    controller:'SingleContact',
                    templateUrl:'views/contact.html'

                })
             
                
                   .when('/list', {
                    controller:'ListController',
                    templateUrl:'views/product_list.html'

                })
                    
                   .when('/newproduct', {
                    controller:'NewController',
                    templateUrl:'views/newProduct.html'

                })
                .when('/adminpanel',{
                       controller:'SingleContant',
                        templateUrl:'views/login.html'

                   })
           
                   .when('/notfound',{
                       controller:'SingleContant',
                        templateUrl:'views/notfound.html'

                   })
                
        .otherwise({ redirectTo: '/store'});

                $locationProvider.html5Mode(true);

 });

 


 