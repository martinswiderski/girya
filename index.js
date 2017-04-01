'use strict';
Object.defineProperty(
    exports,
    '__esModule',
    { value: true }
);

function Girya() {
    this._config = function () { require('./src/_conf') };
    this.version = function () { return require('./src/_conf').version; };
    this.package = function () { return require('./package.json'); };
    this.configuration = require('./src/configuration');
}

module.exports = exports.default = new Girya;

