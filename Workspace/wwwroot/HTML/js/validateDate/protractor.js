var valid = element(by.binding('myForm.input.$valid'));
var input = element(by.model('email.text'));
var text = element(by.binding('$scope.emailSubscribe.text'));
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

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/