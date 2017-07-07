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
                   .when('/notfound',{
                       controller:'SingleContant',
                        templateUrl:'views/notfound.html'

                   })
                
        .otherwise({ redirectTo: '/notfound'});

                $locationProvider.html5Mode(true);

 });

 


 