(function () {
    "use strict";
    angular.module("app-email")
        .controller("emailController", emailController);

    function emailController($scope, $http) {

        var vm = this;

        vm.wtf = "hello";
        vm.email.text = "sdm@me.com";


        vm.alphaEmail = {
            //    From: "stevem@avanttek.com",
            //  Subject: "AlphaInterested",
            //  Text: "MessageText"
            From: "steve.mintz@gmail.com"
        //   To: "alphauser@avanttek.com"
    }


        vm.email = {
            text: "steve.mintz@gmail.com"
            //    sender:   document.getElementById("ValidEmail")
        }
        vm.validateEmail = function() {
            alert("wtf");
        }
        vm.SendGridAlphaInterested = function () {
          //  vm.isbusy = true;
         //   alert("Interested");
            //$http.post("/api/Message", vm.alphaEmail)
            var tester = "http://www.cuisinecuration.com/api/sendgrid/send?who=" + vm.alphaEmail.From;
            alert(tester);
            $http.post(tester)
                .then(function () {
                    //success
                    alert("yes");

                },
                    function () {
                        //failure
                        alert(vm.email.text);
                    })
                .finally(function () {
                    vm.busy = false;
                });
    };

};

})();



