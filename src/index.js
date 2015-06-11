'use strict';

let KindaAbstractUI = require('kinda-abstract-ui');
let Dialog = require('./dialog');

let KindaMobileUI = KindaAbstractUI.extend('KindaMobileUI', function() {
  let superCreator = this.creator;
  this.creator = function(options) {
    superCreator.call(this, options);
    this.Dialog = Dialog.inject(this);
  };
});

module.exports = KindaMobileUI;
