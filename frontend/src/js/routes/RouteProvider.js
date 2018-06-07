angular.module('konzepthaus').config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/login',{
            templateUrl: 'html/login.html',
       })
        .when('/registrieren', {
            templateUrl: 'html/registrierung.html'
        })
        .otherwise({
            redirectTo: '/login' ,
        });
}]);




