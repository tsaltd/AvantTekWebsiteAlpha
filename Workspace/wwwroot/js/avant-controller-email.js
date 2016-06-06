(function () {
    "use strict";
    angular.module("app-email")
        .controller("emailController", emailController);

    function emailController($scope, $http) {

        var vm = this;

        var isbusy = null;
        //var parmFinally = isbusy;
        //vm.finallyFunction function()
        //{
        //    isbusy= parmfinally;
        //}

        var onSendComplete = function (response) {
            $scope.postresult = response;
        }

        vm.wtf = "hello";

        //        vm.isbusy = null;


        vm.alphaEmail = {
            From: "stevem@avanttek.com",
            Subject: "AlphaInterested",
            Text: "MessageText",
            To: "alphauser@avanttek.com"
        }

        vm.email = {
            text: "steve.mintz@gmail.com"
            //    sender:   document.getElementById("ValidEmail")
        }
        vm.SendGridAlphaInterested = function () {

            vm.isbusy = true;
            alert(vm.email.text);
            $scope.isbusy = true;
        }
        $http({
            method: 'POST',
            url: 'http://www.cuisinecuration.com/api/Sendgrid/send',
            data: {
                    who: vm.email.text
                }
                .then(alert('ok'), alert('no'))
                .finally(isbusy = false)
        });
    }})();