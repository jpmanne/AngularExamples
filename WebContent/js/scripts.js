var myApp = angular.module('myModule', []);

myApp.controller('myController', function ($scope) {
    $scope.message = 'AngularJS Tutorial....';
    var employee = {firstName  : 'Jaya Prakash', lastName  : 'Manne', gender  : 'Male'};
    var employees = [
                     	{firstName  : 'Jaya Prakash', lastName  : 'Manne', gender  : 'Male'},
                     	{firstName  : 'Radha Devi', lastName  : 'Manne', gender  : 'Female'},
                     	{firstName  : 'Cherish Keshto', lastName  : 'Manne', gender  : 'Male'}, 
                     	{firstName  : 'Udvitha Keshto', lastName  : 'Manne', gender  : 'Female'} 
                    ];
    var countries = [
                     	{name : "India", cities : [
                     	                           	{name: "Hyderabad"},
                     	                           	{name: "Delhi"},
                     	                           	{name: "Vizag"}
                     	                          ]
                     	},
                     	{name : "USA", cities : [
                    	                           	{name: "Los Angeles"},
                    	                           	{name: "Chicago"},
                    	                           	{name: "Texas"}
                    	                          ]
                    	},
                    	{name : "UK", cities : [
                 	                           	{name: "London"},
                 	                           	{name: "Barmingham"},
                 	                           	{name: "Manchestor"}
                 	                          ]
                    	}
                    ];
    $scope.employee = employee;
    $scope.employees = employees;
    $scope.countries = countries;
});
