angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", function($scope){
    $scope.tutorialObject = [];
    $scope.tutorialObject.title = "Main Page";
    $scope.tutorialObject.subTitle = "Sub Title";
    $scope.tutorialObject.bindOutput = 2;
    
    $scope.timesTwo = function(){
        $scope.tutorialObject.bindOutput *= 2;
    }
    //Programming work
}]);
