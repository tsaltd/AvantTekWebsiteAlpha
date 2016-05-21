(function () {
    "use strict";
        angular.module("app-email")
            .controller("emailController", emailController);
        function emailController() {

            var vm = this;

            vm.wtf = "hello";

            vm.email = {
                text: "steve.mintz@gmail.com"
            }
            vm.validateEmail = function() {
                alert("hi steve");
            }

        }

})();