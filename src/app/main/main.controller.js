(function() {
  'use strict';

  angular
    .module('alfTableApp')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController(playerRatings) {
    var vm = this;
    vm.creationDate = 1485943769706;
    vm.playerRatings = [];
    getPlayerRatings();
    function getPlayerRatings() {
      vm.playerRatings = playerRatings.getRatings();

      angular.forEach(vm.playerRatings, function(playerRating) {
        playerRating.rank = Math.random();
      });
    }
  }
})();
