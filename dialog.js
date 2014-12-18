"use strict";

var _ = require('lodash');
var React = require('react');
var DialogCommon = require('kinda-ui/dialog-common');

var Dialog = React.createClass({
  mixins: [DialogCommon],

  getDialogDOMNode: function() {
    return this.getDOMNode();
  },

  onKeyDown: function(e) {
    if (!this.state.isOpen) return;
    if (e.key === 'Escape')
      this.onHide();
  },

  render: function() {
    return (
      React.DOM.div(
        {
          className: this.state.isOpen ? 'modal active' : 'modal',
          onKeyDown: this.onKeyDown
        },
        React.DOM.header(
          { className: 'bar bar-nav' },
          React.DOM.a(
            { href: 'javascript:void(0)', onClick: this.onHide, className: 'icon icon-close pull-right' }
          ),
          React.DOM.h1(
            { className: 'title' },
            this.state.options.title
          )
        ),
        React.DOM.div(
          { className: 'content' },
          React.DOM.div(
            { className: 'content-padded' },
            (
              this.state.options.message ?
              React.DOM.p(
                {
                  style: {
                    marginTop: '50px',
                    marginBottom: '45px',
                    fontSize: '17px',
                    lineHeight: '22px',
                    fontWeight: 500,
                    textAlign: 'center'
                  }
                },
                this.state.options.message
              ) :
              false
            ),
            (
              this.state.options.input ?
              React.DOM.input({ // TODO: Add a <label>
                type: 'text',
                value: this.state.inputValue,
                placeholder: this.state.options.input.label,
                onChange: this.onChange,
                onKeyPress: this.onKeyPress,
                id: 'input'
              }) :
              false
            ),
            (
              this.state.options.secondaryButton ?
              React.DOM.button(
                { className: 'btn btn-block', onClick: this.onSecondaryButton },
                this.state.options.secondaryButton.label
              ) :
              false
            ),
            React.DOM.button(
              {
                className: 'btn btn-primary btn-block',
                onClick: this.onPrimaryButton
              },
              (this.state.options.primaryButton &&
                this.state.options.primaryButton.label)
            )
          )
        )
      )
    );
  }
});

module.exports = Dialog;
