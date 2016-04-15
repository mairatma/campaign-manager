'use strict';

import ActionTypes from './ActionTypes';

export default {
	removeCampaign(id) {
		return {
			type: ActionTypes.REMOVE_CAMPAIGN,
			id: id
		};
	},

	updateState(state) {
		return {
			type: ActionTypes.UPDATE_DATA,
			state: state
		};
	}
};
