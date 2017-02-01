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



    it('should define more than 5 player rankings', function() {
      expect(angular.isArray(vm.playerRatings)).toBeTruthy();
      expect(vm.playerRatings.length === 5).toBeTruthy();
    });
  });
})();
