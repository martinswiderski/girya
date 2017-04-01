'use strict';

var girya = require('./../../index');

var _test = require('./_md5/girya-details.json'),
    color = require('bash-color');

console.log(
    'MD5: ' +
    color.wrap(_test.md5, color.colors.BLUE, color.styles.bold) +
    ' File: ' +
    color.wrap(_test.file, color.colors.YELLOW, color.styles.bold)
);

describe('Implements multiple interfaces', function () {
    it('version', function () {
        expect(typeof girya.version).toBe('function');
        expect(girya.version()).toBe('0.0.1');
    });
    it('_config', function () {
        expect(typeof girya._config).toBe('object');
        expect(girya._config.version).toBe(girya.version());
    });
    it('package', function () {
        expect(typeof girya.package).toBe('function');
        expect(girya.package().version).toBe('0.0.1');
        expect(girya.package().name).toBe('girya');
    });
    it('version', function () {
        expect(typeof girya.Configuration).toBe('object');
        expect(girya.Configuration.id()).toBe(1);
        expect(girya.Configuration.init().id()).toBe(1);
    });
});

