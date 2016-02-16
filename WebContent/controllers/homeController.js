/*
*
* Home Controller
*
*/

define([], function () {
    function homeController($scope){
        $scope.name = "rajesh";
        console.log("home controller");
    }

    homeController.$inject = ['$scope'];
    return homeController;
});