(function () {
    angular.module('app-email', [])
        .controller('emailController', [
            '$scope', function($scope) {
                $scope.SubscribeEmail = {
                    address: 'me@example.com',
                    wtf: 'fixed !'
            };
                $scope.validateEmail = function ()
                {
                    SubscribeEmail.wtf ='worked !';

                };
    }]);
})();