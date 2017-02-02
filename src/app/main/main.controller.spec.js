(function () {
    'use strict';

    describe('controllers', function () {
        var vm;
        beforeEach(module('aflTableApp'));
        beforeEach(inject(function (_$controller_, _playerRatings_) {
            spyOn(_playerRatings_, 'query').and.returnValue([{}, {}, {}, {}, {}]);

            vm = _$controller_('MainController');
        }));

        it('should have a timestamp creation date', function () {
            expect(vm.creationDate).toEqual(jasmine.any(Number));
        });


        it('should return an array', function () {
            expect(angular.isArray(vm.playerRatings)).toBeTruthy();

        });
    });
})();
