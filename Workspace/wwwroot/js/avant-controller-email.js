(function () {
    "use strict";
    angular.module("app-email")
        .controller("emailController", emailController);

    function emailController($http) {

        var vm = this;

        vm.wtf = "hello";


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
        vm.validateEmail = function() {
            alert("wtf");
        }
        vm.SendGridAlphaInterested = function () {
            vm.isbusy = true;
         //   alert("Interested");
            $http.post("/api/Message", vm.alphaEmail)
                .then(function () {
                    //success
                    alert("yes");

                },
                    function () {
                        //failure
                        alert("no");
                    })
                .finally(function () {
                    vm.busy = false;
                });
    };

};

})();



