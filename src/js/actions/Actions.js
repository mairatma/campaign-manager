'use strict';

import ActionTypes from './ActionTypes';

export default {
	editCampaign(id, sourceUrl) {
		return {
			type: ActionTypes.EDIT_CAMPAIGN,
			id: id,
			sourceUrl: sourceUrl
		};
	},

	removeCampaign(id) {
		return {
			type: ActionTypes.REMOVE_CAMPAIGN,
			id: id
		};
	},

	setSourceUrl(sourceUrl) {
		return {
			type: ActionTypes.SET_SOURCE_URL,
			sourceUrl: sourceUrl
		};
	},

	updateState(state) {
		return {
			type: ActionTypes.UPDATE_DATA,
			state: state
		};
	}
};
