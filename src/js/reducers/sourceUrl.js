'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.START_CAMPAIGN_CREATION:
		case ActionTypes.EDIT_CAMPAIGN:
			return action.sourceUrl || '/';
	}
	return state || '/';
}

export default campaigns;
