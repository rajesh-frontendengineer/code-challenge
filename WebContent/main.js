require(['angular','uiRouter','angularResource','arrayFilter'], function (angular) {

    require(['homeController','appConfig','searchController','meetupCitySer'], function (homeController,config,searchController,meetupCityService) {
       var app = angular.module('app', ['ui.router','ngResource','angular-toArrayFilter']);

        app.controller('homeController', homeController);
        app.controller('searchController', searchController);
        app.config(config);
        app.factory('meetupCityService',meetupCityService);

        angular.bootstrap(document, ['app']);
    });

});