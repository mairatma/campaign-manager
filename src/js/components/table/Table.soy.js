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
        'class', 'table ' + (opt_data.cssClass ? opt_data.cssClass : ''));
      ie_open('thead');
        ie_open('tr');
          var headerList217 = opt_data.headers;
          var headerListLen217 = headerList217.length;
          for (var headerIndex217 = 0; headerIndex217 < headerListLen217; headerIndex217++) {
            var headerData217 = headerList217[headerIndex217];
            ie_open('th', null, null,
                'class', 'light-gray');
              itext((goog.asserts.assert((headerData217) != null), headerData217));
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
        var rowList232 = opt_data.data;
        var rowListLen232 = rowList232.length;
        for (var rowIndex232 = 0; rowIndex232 < rowListLen232; rowIndex232++) {
          var rowData232 = rowList232[rowIndex232];
          ie_open('tr');
            var iLimit221 = opt_data.headers.length;
            for (var i221 = 0; i221 < iLimit221; i221++) {
              ie_open('td');
                itext((goog.asserts.assert((rowData232[i221]) != null), rowData232[i221]));
              ie_close('td');
            }
            ie_open('td');
              ie_open('a', null, null,
                  'href', rowData232[opt_data.headers.length]);
                ie_void('span', null, null,
                    'class', 'glyphicon glyphicon-cog',
                    'data-onclick', 'handleClickEdit_',
                    'data-index', rowIndex232);
              ie_close('a');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-trash',
                  'data-onclick', 'handleClickRemove_',
                  'data-index', rowIndex232);
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

exports.render.params = ["headers","data","cssClass"];
exports.render.types = {"headers":"any","data":"any","cssClass":"any"};
templates = exports;
return exports;

});

class Table extends Component {}
Soy.register(Table, templates);
export default templates;
export { Table, templates };
/* jshint ignore:end */
