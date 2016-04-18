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
  var $$temp;
  ie_open('div', null, null,
      'class', 'campaign-manager-table');
    ie_open('table', null, null,
        'class', 'table ' + (($$temp = opt_data.cssClass) == null ? '' : $$temp));
      ie_open('thead');
        ie_open('tr');
          var headerList243 = opt_data.headers;
          var headerListLen243 = headerList243.length;
          for (var headerIndex243 = 0; headerIndex243 < headerListLen243; headerIndex243++) {
            var headerData243 = headerList243[headerIndex243];
            ie_open('th', null, null,
                'class', 'light-gray');
              itext((goog.asserts.assert((headerData243) != null), headerData243));
            ie_close('th');
          }
        ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
        var rowList254 = opt_data.data;
        var rowListLen254 = rowList254.length;
        for (var rowIndex254 = 0; rowIndex254 < rowListLen254; rowIndex254++) {
          var rowData254 = rowList254[rowIndex254];
          ie_open('tr', null, null,
              'data-row', rowIndex254);
            var cellList251 = rowData254;
            var cellListLen251 = cellList251.length;
            for (var cellIndex251 = 0; cellIndex251 < cellListLen251; cellIndex251++) {
              var cellData251 = cellList251[cellIndex251];
              $cell({cell: cellData251}, null, opt_ijData);
            }
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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $cell(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('td');
    var content__soy259 = function() {
      ie_open('span', null, null,
          'class', ($$temp = opt_data.cell.cssClass) == null ? '' : $$temp);
        itext((goog.asserts.assert((($$temp = opt_data.cell.text) == null ? '' : $$temp) != null), ($$temp = opt_data.cell.text) == null ? '' : $$temp));
      ie_close('span');
    };
    if (opt_data.cell.href) {
      ie_open('a', null, null,
          'href', opt_data.cell.href);
        content__soy259();
      ie_close('a');
    } else {
      content__soy259();
    }
  ie_close('td');
}
exports.cell = $cell;
if (goog.DEBUG) {
  $cell.soyTemplateName = 'Table.cell';
}

exports.render.params = ["data","headers","cssClass"];
exports.render.types = {"data":"any","headers":"any","cssClass":"any"};
exports.cell.params = ["cell"];
exports.cell.types = {"cell":"any"};
templates = exports;
return exports;

});

class Table extends Component {}
Soy.register(Table, templates);
export default templates;
export { Table, templates };
/* jshint ignore:end */
