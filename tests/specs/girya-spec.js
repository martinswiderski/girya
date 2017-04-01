'use strict';

var girya = require('./../../index'),
    _test = require('./_md5/girya-details.json');

console.log('MD5: ' + _test.md5 + ' File: ' + _test.file);

describe('Implements multiple interfaces', function () {
    it('version', function () {
       expect(typeof girya.version).toBe('function');
       expect(girya.version()).toBe('0.0.1');
    });
});
