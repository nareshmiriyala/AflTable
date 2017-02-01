(function() {
  'use strict';

  describe('service playerRatings', function() {
    var playerRatings;
    beforeEach(module('alfTableApp'));

    beforeEach(inject(function(_playerRatings_) {
      playerRatings = _playerRatings_;
    }));

    it('should be registered', function() {
      expect(playerRatings).not.toEqual(null);
    });

    describe('getRatings function', function() {
      it('should exist', function() {
        expect(playerRatings.getRatings).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = playerRatings.getRatings();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
