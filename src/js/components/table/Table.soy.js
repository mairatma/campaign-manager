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
          var headerList196 = opt_data.headers;
          var headerListLen196 = headerList196.length;
          for (var headerIndex196 = 0; headerIndex196 < headerListLen196; headerIndex196++) {
            var headerData196 = headerList196[headerIndex196];
            ie_open('th', null, null,
                'class', 'light-gray');
              itext((goog.asserts.assert((headerData196) != null), headerData196));
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
        var rowList210 = opt_data.data;
        var rowListLen210 = rowList210.length;
        for (var rowIndex210 = 0; rowIndex210 < rowListLen210; rowIndex210++) {
          var rowData210 = rowList210[rowIndex210];
          ie_open('tr');
            var cellList203 = rowData210;
            var cellListLen203 = cellList203.length;
            for (var cellIndex203 = 0; cellIndex203 < cellListLen203; cellIndex203++) {
              var cellData203 = cellList203[cellIndex203];
              ie_open('td');
                itext((goog.asserts.assert((cellData203) != null), cellData203));
              ie_close('td');
            }
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-cog',
                  'data-onclick', 'handleClickEdit_',
                  'data-index', rowIndex210);
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-trash',
                  'data-onclick', 'handleClickRemove_',
                  'data-index', rowIndex210);
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
