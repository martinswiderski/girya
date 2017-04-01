'use strict';

var girya = require('./../../index');

var _test = require('./_md5/girya-details.json'),
    color = require('bash-color');

console.log('MD5: ' + color.cyan(_test.md5) + ' File: ' + color.yellow(_test.file));

describe('Implements multiple interfaces', function () {
    it('version', function () {
       expect(typeof girya.version).toBe('function');
       expect(girya.version()).toBe('0.0.1');
    });
    it('_config', function () {
       expect(typeof girya._config).toBe('function');
    });
    it('package', function () {
       expect(typeof girya.package).toBe('function');
       expect(girya.package().version).toBe('0.0.1');
       expect(girya.package().name).toBe('girya');
    });
    it('version', function () {
       expect(typeof girya.configuration).toBe('object');
       expect(girya.configuration.id()).toBe(1);
    });
});

