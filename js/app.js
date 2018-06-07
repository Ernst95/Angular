/*
 *  Created by Ernst 05/06/2018 
 */

 var app = angular.module('tutorialApp', ["ngRoute", "tutorialCtrlModule"]);

 app.config(function($routeProvider){
    $routeProvider

    .when("/", {
        templateUrl: "views/tutorial.html",
        controller: "TutorialCtrl"
    })

    .when("/tutorialSecond", {
        templateUrl: "views/tutorialSecond.html",
        controller: "TutorialCtrl2"
    })

    .when("/error1", {
        templateUrl: "views/error.html"
    })

    .otherwise({
        redirectTo: "/error1"
    })
 });