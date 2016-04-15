/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Table.
 * @public
 */

goog.module('Table.incrementaldom');

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
      'class', 'campaign-manager-table');
    ie_open('table', null, null,
        'class', 'table');
      ie_open('thead');
        ie_open('tr');
          var headerList102 = opt_data.headers;
          var headerListLen102 = headerList102.length;
          for (var headerIndex102 = 0; headerIndex102 < headerListLen102; headerIndex102++) {
            var headerData102 = headerList102[headerIndex102];
            ie_open('th', null, null,
                'class', 'light-gray');
              itext((goog.asserts.assert((headerData102) != null), headerData102));
            ie_close('th');
          }
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Edit');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Remove');
          ie_close('th');
        ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
        var rowList116 = opt_data.data;
        var rowListLen116 = rowList116.length;
        for (var rowIndex116 = 0; rowIndex116 < rowListLen116; rowIndex116++) {
          var rowData116 = rowList116[rowIndex116];
          ie_open('tr');
            var cellList109 = rowData116;
            var cellListLen109 = cellList109.length;
            for (var cellIndex109 = 0; cellIndex109 < cellListLen109; cellIndex109++) {
              var cellData109 = cellList109[cellIndex109];
              ie_open('td');
                itext((goog.asserts.assert((cellData109) != null), cellData109));
              ie_close('td');
            }
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-cog',
                  'data-onclick', 'handleClickEdit_',
                  'data-index', rowIndex116);
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-trash',
                  'data-onclick', 'handleClickRemove_',
                  'data-index', rowIndex116);
            ie_close('td');
          ie_close('tr');
        }
      ie_close('tbody');
    ie_close('table');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Table.render';
}

exports.render.params = ["headers","data"];
exports.render.types = {"headers":"any","data":"any"};
templates = exports;
return exports;

});

class Table extends Component {}
Soy.register(Table, templates);
export default templates;
export { Table, templates };
/* jshint ignore:end */
