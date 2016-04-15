/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from EditCampaign.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditCampaign.
 * @public
 */

goog.module('EditCampaign.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('BackArrow.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager container-fluid white-bg');
    ie_open('div', null, null,
        'class', 'campaign-manager-edit-campaign');
      $templateAlias1(opt_data, null, opt_ijData);
      ie_open('h1');
        itext((goog.asserts.assert((opt_data.editCampaignId != null ? 'Edit' : 'New') != null), opt_data.editCampaignId != null ? 'Edit' : 'New'));
        itext(' Campaign');
      ie_close('h1');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EditCampaign.render';
}

exports.render.params = ["editCampaignId","sourceUrl"];
exports.render.types = {"editCampaignId":"any","sourceUrl":"any"};
templates = exports;
return exports;

});

class EditCampaign extends Component {}
Soy.register(EditCampaign, templates);
export default templates;
export { EditCampaign, templates };
/* jshint ignore:end */
