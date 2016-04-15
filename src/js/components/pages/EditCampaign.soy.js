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
      ie_open('form', null, null,
          'class', 'form-horizontal');
        ie_open('h2');
          itext('Details');
        ie_close('h2');
        ie_open('div', null, null,
            'class', 'form-group');
          ie_open('label', null, null,
              'class', 'col-sm-1 control-label');
            itext('Name:');
          ie_close('label');
          ie_open('div', null, null,
              'class', 'col-sm-4');
            ie_open('input', null, null,
                'type', 'text',
                'class', 'form-control',
                'name', 'name');
            ie_close('input');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'form-group');
          ie_open('div', null, null,
              'class', 'col-sm-10');
            ie_open('a', null, null,
                'href', opt_data.sourceUrl,
                'class', 'btn btn-success',
                'data-onclick', 'save');
              itext((goog.asserts.assert((opt_data.editCampaignId != null ? 'Save' : 'Create') != null), opt_data.editCampaignId != null ? 'Save' : 'Create'));
              itext(' Campaign');
            ie_close('a');
            ie_open('a', null, null,
                'href', opt_data.sourceUrl,
                'class', 'btn btn-default');
              itext('Cancel');
            ie_close('a');
          ie_close('div');
        ie_close('div');
      ie_close('form');
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
