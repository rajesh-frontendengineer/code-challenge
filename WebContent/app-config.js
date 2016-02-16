/**
 *
 * Route Configuration
 *
 */
define([],function(){
    function config($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise("/Home");
            //
            // Now set up the states
            $stateProvider
            //States and nested views
                .state('Home', {
                    url: "/Home",
                    templateUrl: "WebContent/views/home.html",
                })
                .state('Search', {
                    url: "/Search",
                    templateUrl: "WebContent/views/Search.html",
                    controller : 'searchController',
                    controllerAs: 'searchCtrl'
                })
    }
    config.$inject=['$stateProvider','$urlRouterProvider'];

    return config;
});