angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", "Calculations", function($scope, Calculations){
    $scope.tutorialObject = [];
    $scope.tutorialObject.title = "Main Page";
    $scope.tutorialObject.subTitle = "Sub Title";

    $scope.tutorialObject.bindOutput = 2;
        
    $scope.tutorialObject.firstName = "Ernst";
    $scope.tutorialObject.lastName = "Chapman";

    $scope.timesTwo = function(){
        $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
    };

    Calculations.pythagoreanTheorum(2, 2);
    //Programming work
}])

.controller("TutorialCtrl2", ["$scope", function($scope){
    $scope.secondTutorial = "This is the second tutorial:";
}])

.directive("ecWelcomeMessage", function(){
    return {
        restrict: "AE",
        template: "<div> Hello World </div>"
    }
})

.factory("Calculations", function(){
    var calculations = {};

    calculations.timesTwo = function(a){
        return a * 2;
    }

    calculations.pythagoreanTheorum = function(a, b){
        return (a * a) + (b * b);
    }

    return calculations;
});