angular.module('assessment').controller('detailsCtrl', function($scope, $http, $stateParams, mainSrv){
        $scope.getDetails = mainSrv.getDetails($stateParams.id).then(function(response){
          $scope.product = response;
        })
})
