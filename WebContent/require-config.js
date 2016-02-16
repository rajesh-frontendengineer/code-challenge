/**
 *
 * require Configuration
 *
 */

require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'uiRouter': 'bower_components/angular-ui-router/release/angular-ui-router',
        'bootstrap': 'bower_components/bootstrap/js',
        'angular-ui': 'bower_components/angular-ui-bootstrap/src',
        'uiTypeahead':'bower_components/angular-ui-bootstrap/src/typeahead/typeahead',
        'angularResource':'bower_components/angular-resource/angular-resource',
        'arrayFilter':'bower_components/angular-toArrayFilter/toArrayFilter',


        // controllers
        'homeController':'WebContent/controllers/homeController',
        'searchController':'WebContent/controllers/searchController',

        // meetup Services
        'meetupCitySer':'WebContent/services/meetupCityService',

        //app-Configuration
        'appConfig':'WebContent/app-config'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'arrayFilter': {deps: ['angular']},
        'angularResource': {deps: ['angular']},
        'uiRouter': {deps: ['angular']},
        'uiTypeahead': {deps: ['angular']},
        'angular-ui': ['angular']
    }
});
