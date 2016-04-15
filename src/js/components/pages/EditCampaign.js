'use strict';

import store from '../../store/store';
import templates from './EditCampaign.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class EditCampaign extends Component {
	save() {
		store.dispatch(Actions.saveCampaign({
			name: this.element.querySelector('[name="name"]').value,
			budget: 0,
			startDate: new Date(),
			endDate: new Date(),
			goal: {
				generation: {
					count: 1000
				}
			},
			influencedCustomers: 0,
			influencedWins: 0,
			leadsCount: 0
		}));
	}
}
Soy.register(EditCampaign, templates);

export default EditCampaign;
