(function () {
    'use strict';

    angular
        .module('aflTableApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(playerRatings) {
        var vm = this;
        vm.creationDate = 1485943769706;
        vm.playerRatings = [];

        playerRatings = getPlayerRatings();
        function getPlayerRatings() {
            playerRatings.query(function (data) {

                return data[0].playerRatings;
            });
        }
    }
})();
