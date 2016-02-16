/*
 *
 * Search Controller
 *
 */

define(['meetupCitySer'], function (meetupCityService) {
    function searchController($scope,meetupCityService,$q){
        $scope.name = "rajesh";
        $scope.city = [];
        console.log("Search controller");
        var checkData = meetupCityService.getData();
        checkData.then(function(response) {
            var data = response.data;
            var meetUp = data.results;
            $scope.meetUp = meetUp;
            console.log(meetUp.length);
            console.log(meetUp[0].city);

            var cities = [] ;

             var addCity = function (i) {
                cities.push(
                    {
                        city: meetUp[i].city,
                        ranking:meetUp[i].ranking,
                        state :meetUp[i].state,
                        member_count:meetUp[i].member_count,
                        zip:meetUp[i].zip
                    }
                );
            };
            for (var i = 0; i < meetUp.length; i++) {
                addCity(i);
            }
            $scope.cities = cities;
            console.log($scope.cities[0]);

        }, function(reason) {
            alert('Failed: ' + reason);
        });


    }

    searchController.$inject = ['$scope','meetupCityService','$q'];
    return searchController;
});