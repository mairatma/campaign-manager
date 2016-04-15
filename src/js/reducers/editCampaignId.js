'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.EDIT_CAMPAIGN:
			return action.id;
		case ActionTypes.START_CAMPAIGN_CREATION:
			return null;
	}
	return state || null;
}

export default campaigns;
