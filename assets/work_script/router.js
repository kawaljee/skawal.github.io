app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : '../../application/index.html'
    })
    .when('/carousel',{
        templateUrl : '../../application/carousel.html'
    })
    .when('/form',{
        templateUrl : '../../application/form.html'
    })
    .otherwise({
        redirectTo : '/'
    })
})