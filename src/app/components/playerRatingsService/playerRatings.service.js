/**
 * Created by ncmiriyala on 1/02/2017.
 */
(function() {
  'use strict';
  angular
    .module('AflTableApp')
    .factory('playerRatings', playerRatings);
  function playerRatings($resource) {

   return $resource("/api/ratings");
  }
})();
