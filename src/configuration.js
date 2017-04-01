'use strict';

var _c = 0, _store = false,
    md5 = require('md5'),
    ConfigurationError = require('./configuration-error');

function Configuration() {

    var _id = 0,
        _initd = false;

    this._id = 0;

    this.id = function(id) {
        if (_id === 0
            && typeof id === 'number'
            && parseInt(id) > 0) {
            _id = this._id = parseInt(id);
            _initd = true;
        }
        return _id;
    };

    this.sign = function() {
        this._enforceSingleton();
        return md5(JSON.stringify(this));
    };

    this._enforceSingleton = function() {
        if (_initd !== true) {
            throw new ConfigurationError('Illegal instance, use init() after constructing');
        } else {
            return;
        }
    };

    this.reset = function() {
        // placeholder
    };

    this.init = function() {
        if (_c > 0) {
            return _store;
        } else {
            this.reset();
            this.id(++_c);
            return this;
        }
    };
}

module.exports = (_store !== false) ? _store : _store = (new Configuration()).init();