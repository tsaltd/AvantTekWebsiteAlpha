
(function () {
    var text = element(by.binding('SubscribeEmail.address'));
    var valid = element(by.binding('myForm.input.$valid'));
    var input = element(by.model('SubscribeEmail.address'));

    it('should initialize to model', function () {
        expect(text.getText()).toContain('me@example.com');
        expect(valid.getText()).toContain('true');
    });

    it('should be invalid if empty', function () {
        input.clear();
        input.sendKeys('');
        expect(text.getText()).toEqual('text =');
        expect(valid.getText()).toContain('false');
    });

    it('should be invalid if not email', function () {
        input.clear();
        input.sendKeys('xxx');

        expect(valid.getText()).toContain('false');
    });


})();