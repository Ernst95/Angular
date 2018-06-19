/*
 *  Created by Ernst 05/06/2018 
 */

var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", 
        {
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem/:id", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.service("GroceryService", function() {
    var groceryService = {};

    groceryService.groceryItems = [
        {itemName: 'milk', date: '2014-10-01'},
        {itemName: 'cookies', date: '2014-10-01'},
        {itemName: 'ice cream', date: '2014-10-02'},
        {itemName: 'potatoes', date: '2014-10-02'},
        {itemName: 'cereal', date: '2014-10-03'},
        {itemName: 'bread', date: '2014-10-03'},
        {itemName: 'eggs', date: '2014-10-04'},
        {itemName: 'tortillas', date: '2014-10-04'}
    ];

    groceryService.save = function(entry) {
        groceryService.groceryItems.push(entry);
    }

    return groceryService;
    
});

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService) {
    
    $scope.groceryItems = GroceryService.groceryItems;

    $scope.rp = "Route Parameter Value: " + $routeParams.id;

    $scope.groceryItem = {id:7, completed:true, itemName:"cheese", date:new Date() }

    $scope.save = function() {
        GroceryService.save($scope.groceryItem);
        $location.path("/");
    }

}])