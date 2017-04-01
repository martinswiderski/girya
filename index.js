'use strict';
Object.defineProperty(
    exports,
    '__esModule',
    { value: true }
);

function Girya() {
    this._config = require('./src/_conf');
    this.version = function () { return require('./src/_conf').version; };
    this.package = function () { return require('./package.json'); };
    this.Configuration = require('./src/configuration');
    this.ConfigurationError = require('./src/configuration-error');
}

module.exports = exports.default = new Girya;

