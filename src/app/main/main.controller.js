(function() {
  'use strict';

  angular
    .module('AflTableApp')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController(playerRatings) {
    var vm = this;
    vm.creationDate = 1485943769706;
    vm.playerRatings = [];

    getPlayerRatings();
    function getPlayerRatings() {
       playerRatings.query(function(data){
         vm.playerRatings =data[0].playerRatings;
      });
    }
  }
})();
