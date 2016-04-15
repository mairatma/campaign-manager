/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ManageCampaigns.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ManageCampaigns.
 * @public
 */

goog.module('ManageCampaigns.incrementaldom');

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

var $templateAlias4 = Soy.getTemplate('CampaignTable.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('Card.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Header.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Search.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-manage-campaigns');
    $templateAlias1({includeAddCampaignButton: true, includeTabs: true, page: opt_data.page}, null, opt_ijData);
    ie_open('div', null, null,
        'class', 'row');
      ie_void('div', null, null,
          'class', 'col-md-4');
      ie_open('div', null, null,
          'class', 'col-md-4');
        $templateAlias2({events: {valueChanged: opt_data.search}}, null, opt_ijData);
      ie_close('div');
    ie_close('div');
    var param172 = function() {
      ie_open('div', null, null,
          'class', 'form-inline order-select');
        ie_open('label');
          itext('Order by:');
        ie_close('label');
        ie_open('select', null, null,
            'class', 'form-control',
            'data-onchange', opt_data.sort);
          ie_open('option', null, null,
              'value', 'name');
            itext('Name');
          ie_close('option');
          ie_open('option', null, null,
              'value', 'date');
            itext('Scheduled Date');
          ie_close('option');
        ie_close('select');
      ie_close('div');
      $templateAlias4({campaigns: opt_data.filteredCampaigns ? opt_data.filteredCampaigns : []}, null, opt_ijData);
    };
    $templateAlias3({children: param172}, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ManageCampaigns.render';
}

exports.render.params = ["filteredCampaigns","page","search","sort"];
exports.render.types = {"filteredCampaigns":"any","page":"any","search":"any","sort":"any"};
templates = exports;
return exports;

});

class ManageCampaigns extends Component {}
Soy.register(ManageCampaigns, templates);
export default templates;
export { ManageCampaigns, templates };
/* jshint ignore:end */
