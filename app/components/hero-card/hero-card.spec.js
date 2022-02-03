describe('myApp.hero-card', function () {
    beforeEach(module('myApp.hero-card'));
    describe('HeroCtrl controller', function () {
        it('should ....', inject(function ($controller) {
            //spec body
            let HeroCtrl = $controller('HeroCtrl');
            console.log(HeroCtrl);
            expect(HeroCtrl).toBeDefined();
        }));

    });
});