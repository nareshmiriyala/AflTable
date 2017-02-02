/**
 * Created by ncmiriyala on 1/02/2017.
 */
(function () {
    'use strict';
    angular
        .module('aflTableApp')
        .factory('playerRatings', playerRatings);
    function playerRatings($resource) {

        return $resource("/api/ratings");
    }
})();
