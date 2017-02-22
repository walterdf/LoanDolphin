app.controller('MoedasController', function($scope, $http) {
    $scope.moedas = [];
    $scope.title = "Enter the values below";

    $http({
        method: 'GET',
        url: 'http://api.fixer.io/latest'
    }).then(function successCallback(response) {
        for (var index in response.data.rates) {
            $scope.moedas.push(index);
        }
    }, function errorCallback(response) {
        console.log("Error");
    });

    $scope.clickCalc = function() {
        $http({
            method: 'GET',
            url: 'http://api.fixer.io/latest?base=' + $scope.m2 + '&symbols=' + $scope.m1
        }).then(function successCallback(response) {
            $scope.title = "Converted value: "+$scope.m2+" "+($scope.valMoney / response.data.rates[$scope.m1]).toFixed(2);
        }, function errorCallback(response) {
            console.log("Error");
        });
    };
});
