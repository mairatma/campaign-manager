'use strict';

import { object } from 'metal';
import store from '../../store/store';
import templates from './EditCampaign.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../edit/EditCampaignDetails.soy';
import '../edit/EditCampaignGoal.soy';

class EditCampaign extends Component {
	buildDate_(dateStr, time) {
		var date = new Date(dateStr);
		date.setHours(time);
		return date;
	}

	getData_() {
		var data = {};
		var namedFields = this.element.querySelectorAll('form [name]');
		for (var i = 0; i < namedFields.length; i++) {
			var name = namedFields[i].getAttribute('name');
			data[name] = namedFields[i].text ? namedFields[i].text : namedFields[i].value;
		}
		return data;
	}

	save() {
		var data = this.getData_();
		store.dispatch(Actions.saveCampaign(object.mixin(data, {
			budget: parseInt(data.budget, 10) || 0,
			startDate: this.buildDate_(data.startDate, data.startDateTime),
			endDate: this.buildDate_(data.endDate, data.endDateTime),
			goal: {
				generation: {
					count: data['generation.count']
				}
			},
			influencedCustomers: 0,
			influencedWins: 0,
			journey: parseInt(data.journey, 10),
			leadsCount: 0
		})));
	}
}
Soy.register(EditCampaign, templates);

export default EditCampaign;
