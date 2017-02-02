(function () {
    'use strict';

    describe('service playerRatings', function () {
        var playerRatings;
        var $httpBackend;
        beforeEach(module('aflTableApp'));

        beforeEach(inject(function (_playerRatings_, _$httpBackend_) {
            playerRatings = _playerRatings_;
            $httpBackend = _$httpBackend_;
        }));

        it('should be registered', function () {
            expect(playerRatings).not.toEqual(null);
        });

        describe('Get playerRatings', function () {
            it('should call playerRatings', function () {
                $httpBackend.expectGET('/api/ratings')
                    .respond([{
                        playerRatings: 'test'
                    }]);
                var result = playerRatings.query(function (data) {
                    return data;
                });

                $httpBackend.flush();

                expect(result[0].playerRatings).toEqual('test');
            });


        });
    });
})();
