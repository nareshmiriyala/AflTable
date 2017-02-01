(function() {
  'use strict';

  angular
    .module('gulpAlfApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
