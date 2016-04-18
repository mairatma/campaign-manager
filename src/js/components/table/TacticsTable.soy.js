/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from TacticsTable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TacticsTable.
 * @public
 */

goog.module('TacticsTable.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('Table.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'campaign-manager-tactics-table');
    $templateAlias1({headers: ['Name', 'Destination', 'Promos', 'Audience', 'Banners', 'Edit', 'Remove'], data: opt_data.tableData, events: {click: opt_data.handleTableClicked_}, cssClass: 'table-box'}, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TacticsTable.render';
}

exports.render.params = ["handleTableClicked_","tableData"];
exports.render.types = {"handleTableClicked_":"any","tableData":"any"};
templates = exports;
return exports;

});

class TacticsTable extends Component {}
Soy.register(TacticsTable, templates);
export default templates;
export { TacticsTable, templates };
/* jshint ignore:end */
