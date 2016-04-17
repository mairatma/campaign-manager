/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from TableCard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TableCard.
 * @public
 */

goog.module('TableCard.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('Card.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-table-card');
    var param165 = function() {
      ie_open('div', null, null,
          'class', 'campaign-manager-card-title');
        itext((goog.asserts.assert((opt_data.title) != null), opt_data.title));
      ie_close('div');
      ie_open('table', null, null,
          'class', 'table table-clean');
        ie_open('thead');
          ie_open('tr');
            var headerList174 = opt_data.headers;
            var headerListLen174 = headerList174.length;
            for (var headerIndex174 = 0; headerIndex174 < headerListLen174; headerIndex174++) {
              var headerData174 = headerList174[headerIndex174];
              ie_open('th', null, null,
                  'class', 'light-gray ' + (headerIndex174 == 0 ? '' : 'text-center'));
                itext((goog.asserts.assert((headerData174) != null), headerData174));
              ie_close('th');
            }
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          var rowList186 = opt_data.data;
          var rowListLen186 = rowList186.length;
          for (var rowIndex186 = 0; rowIndex186 < rowListLen186; rowIndex186++) {
            var rowData186 = rowList186[rowIndex186];
            ie_open('tr');
              var cellList183 = rowData186;
              var cellListLen183 = cellList183.length;
              for (var cellIndex183 = 0; cellIndex183 < cellListLen183; cellIndex183++) {
                var cellData183 = cellList183[cellIndex183];
                ie_open('td', null, null,
                    'class', cellIndex183 == 0 ? '' : 'text-center');
                  itext((goog.asserts.assert((cellData183) != null), cellData183));
                ie_close('td');
              }
            ie_close('tr');
          }
        ie_close('tbody');
      ie_close('table');
    };
    $templateAlias1({children: param165}, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TableCard.render';
}

exports.render.params = ["headers","data","title"];
exports.render.types = {"headers":"any","data":"any","title":"any"};
templates = exports;
return exports;

});

class TableCard extends Component {}
Soy.register(TableCard, templates);
export default templates;
export { TableCard, templates };
/* jshint ignore:end */
