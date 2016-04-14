/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from App.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace App.
 * @public
 */

goog.module('App.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('Dashboard.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager container');
    ie_open('div', null, null,
        'class', 'campaign-manager-header row');
      ie_open('div', null, null,
          'class', 'col-md-12');
        ie_open('button', null, null,
            'class', 'btn btn-primary campaign-manager-button-new pull-right');
          itext('New Campaign');
        ie_close('button');
        ie_open('h4', null, null,
            'class', 'campaign-manager-title');
          itext('Campaign Manager');
        ie_close('h4');
      ie_close('div');
    ie_close('div');
    $templateAlias1(opt_data, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'App.render';
}

exports.render.params = ["campaigns"];
exports.render.types = {"campaigns":"any"};
templates = exports;
return exports;

});

class App extends Component {}
Soy.register(App, templates);
export default templates;
export { App, templates };
/* jshint ignore:end */
