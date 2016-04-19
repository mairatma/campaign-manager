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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-tactics-table campaign-manager-table');
    ie_open('table', null, null,
        'class', 'table table-box');
      ie_open('thead');
        ie_open('tr');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Name');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Destination');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Promos');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Audience');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Banners');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Remove');
          ie_close('th');
        ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
        var idList337 = opt_data.selectedTacticIds;
        var idListLen337 = idList337.length;
        for (var idIndex337 = 0; idIndex337 < idListLen337; idIndex337++) {
          var idData337 = idList337[idIndex337];
          ie_open('tr', null, null,
              'data-row', idIndex337);
            ie_open('td');
              ie_open('span');
                itext((goog.asserts.assert((opt_data.destinations[opt_data.tactics[idData337].destinationId].name) != null), opt_data.destinations[opt_data.tactics[idData337].destinationId].name));
              ie_close('span');
            ie_close('td');
            ie_open('td');
              ie_open('span');
                itext((goog.asserts.assert((opt_data.tactics[idData337].name) != null), opt_data.tactics[idData337].name));
              ie_close('span');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', opt_data.tactics[idData337].oneToOnePromos.length > 0 ? 'glyphicon glyphicon-ok' : '');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', opt_data.tactics[idData337].oneToOnePromos.length > 0 ? 'glyphicon glyphicon-ok' : '');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', opt_data.tactics[idData337].promotionalAds.length > 0 ? 'glyphicon glyphicon-ok' : '');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-trash table-action-icon table-action-remove',
                  'data-onclick', 'remove_');
            ie_close('td');
          ie_close('tr');
        }
      ie_close('tbody');
    ie_close('table');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TacticsTable.render';
}

exports.render.params = ["destinations","selectedTacticIds","tactics"];
exports.render.types = {"destinations":"any","selectedTacticIds":"any","tactics":"any"};
templates = exports;
return exports;

});

class TacticsTable extends Component {}
Soy.register(TacticsTable, templates);
export default templates;
export { TacticsTable, templates };
/* jshint ignore:end */
