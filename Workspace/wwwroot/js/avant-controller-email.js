(function () {
    angular.module('app-email', [])
        .controller('emailController', [
            '$scope', function($scope) {
                $scope.email = {
                    text: 'me@example.com',
                    wtf: 'fixed !'
            };
                $scope.validateEmail = function ()
                {
                    $scope.wtf ='worked !';

                };
    }]);
})();