'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.REMOVE_CAMPAIGN:
			state = state.concat();
			state.splice(action.id, 1);
			return state;
		case ActionTypes.SAVE_CAMPAIGN:
			state = state.concat();
			if (action.campaign.id) {
				state[action.campaign.id] = action.campaign;
			} else {
				action.campaign.id = state.length;
				state.push(action.campaign);
			}
			return state;
	}
	return state || [];
}

export default campaigns;
