angular.module('assessment').controller('shopCtrl', function($scope, $http, $stateParams, mainSrv){
  var getProducts = function(){
    mainSrv.getProducts().then(function(response){
      $scope.products = response;
    })
  }
  getProducts();
})
