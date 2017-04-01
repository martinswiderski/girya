var girya = require('./../../index'),
    configuration = girya.Configuration,
    _err = false,
    _details = [];

var _test = require('./_md5/configuration-details.json'),
    color = require('bash-color');

console.log(
    'MD5: ' +
    color.wrap(_test.md5, color.colors.BLUE, color.styles.bold) +
    ' File: ' +
    color.wrap(_test.file, color.colors.YELLOW, color.styles.bold)
);

describe('Can MD5 sign itself', function () {
    it('is 32 chars long', function () {
        expect(configuration.sign().length).toBe(32);
    });
    it('it\' the same MD5', function () {
        expect(configuration.sign()).toBe('8b7d552c2c9210987286c448fbc85a1f');
    });
});




