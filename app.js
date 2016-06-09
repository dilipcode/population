var population = angular.module('populationApp',[]);

population.controller('populationController', function($scope, $http){

  $scope.getPopulation = function(){
    var urlStr = 'http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+$scope.countryName+'&time='+$scope.year+'&SEX=0&key=26bad1dd9a50c28750812a74b4a0188759a717b8'
    console.log("population called")
    $http({
      method: 'GET',
      url: urlStr
    }).then(function successCallback(response){
      console.log(response);
      $scope.results = response.data;
      // $scope.results = [].concat.apply([],$scope.finals);

    }, function errorCallback(response){
      console.log("error");
    })
  }

});


population.controller('percentController', function($scope, $http){

  $scope.changedPopulation = function(){
    var urlStr1 = 'http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+$scope.countryName+'&time='+$scope.year1+'&SEX=0&key=26bad1dd9a50c28750812a74b4a0188759a717b8'
    console.log("population changed year1 called")
    $http({
      method: 'GET',
      url: urlStr1
    }).then(function successCallback(response){
      console.log(response);
      $scope.results1 = response.data;
      // $scope.results = [].concat.apply([],$scope.finals);

    }, function errorCallback(response){
      console.log("error");
    });

    var urlStr2 = 'http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+$scope.countryName+'&time='+$scope.year2+'&SEX=0&key=26bad1dd9a50c28750812a74b4a0188759a717b8'
    console.log("population changed year2 called")
    $http({
      method: 'GET',
      url: urlStr2
    }).then(function successCallback(response){
      console.log(response);
      $scope.results2 = response.data;
      // $scope.results = [].concat.apply([],$scope.finals);

    }, function errorCallback(response){
      console.log("error");
    }); 
         
        
    
  }

  $scope.final = [];
    for(var i =1; i < $scope.results1.length; i++){          
        final.push($scope.results2[i][2] - $scope.results1[i][2]);
     }   


});