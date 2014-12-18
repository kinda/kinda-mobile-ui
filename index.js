"use strict";

var _ = require('lodash');
var ui = require('kinda-ui').create();

var mobileUI = _.clone(ui);

mobileUI.Dialog = require('./dialog');

var MobileUI = {
  create: function() {
    return mobileUI;
  }
};

module.exports = MobileUI;
