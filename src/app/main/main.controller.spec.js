(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('alfTableApp'));
    beforeEach(inject(function(_$controller_,  _playerRatings_) {
      spyOn(_playerRatings_, 'getRatings').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });



    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.palayerRatings)).toBeTruthy();
      expect(vm.palayerRatings.length === 5).toBeTruthy();
    });
  });
})();
