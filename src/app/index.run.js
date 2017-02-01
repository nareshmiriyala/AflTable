(function() {
  'use strict';

  angular
    .module('alfTableApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
