/*
 *
 * meetup City Service
 *
 */

define([], function () {
    function meetupCityService($http,$q,$log){

        var meetUp = {};
        meetUp.getData=function(){
            return $http({
                method:'GET',
                url:'meetUp.json',
                dataType :'json'
            });
        }
        return meetUp;
    }
    meetupCityService.$inject = ['$http','$q','$log'];
    return meetupCityService;
});


//
//getCities = function() {
//    var deferred = $q.defer();
//    $http.get('meetUp.json')
//        .success(function(data) {
//            deferred.resolve({
//                title: data.raking,
//                cost: data.state,
//                city: data.city
//            });
//        }).error(function(msg, code) {
//        deferred.reject(msg);
//        $log.error(msg, code);
//    });
//    return deferred.promise;
//}
//var mr = {};
//mr.getData=function(){
//    return $http({
//        method:'GET',
//        url:'http://api.meetup.com/2/cities',
//        dataType :'json'
//    });
//}
//return mr;