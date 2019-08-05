let app = angular.module('myApp',['ngRoute']);
app.controller('appCtrl',($scope,$http)=>{
        $scope.getMovie = (movieName)=>{
            $http.get("http://www.omdbapi.com/?apikey=ce23fd12&t="+movieName)
            .then(
                function successCallback(response){
                    console.log(response.data)
                },
                function errorCallback(response){
                    console.log(response)
                }
            );
        }
        $scope.getMovie("ant-man");
    }
)