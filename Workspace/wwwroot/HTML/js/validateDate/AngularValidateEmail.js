  //angular.module('emailExample', [])
  //  .controller('ExampleController', ['$scope', function($scope) {
  //      $scope.email = {
  //          text: 'me@example.com'
  //      };
  //  }]);


(function() {
    angular.module("app-email", [])
        .controller('ExampleController', [
            '$scope', function($scope) {
                $scope.emailSubscribe = {
                    text: 'me@example.com',
                    wtf: "wtf"
                };
                $scope.testfunc = function() { alert('hello') }
            //};
            }
        ]);
})();