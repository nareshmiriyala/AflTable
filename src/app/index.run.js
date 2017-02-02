(function () {
    'use strict';

    angular
        .module('aflTableApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
