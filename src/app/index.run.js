(function() {
  'use strict';

  angular
    .module('AflTableApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
