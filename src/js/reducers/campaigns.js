'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.REMOVE_CAMPAIGN:
			state = state.concat();
			state.splice(action.id, 1);
			return state;
	}
	return state || [];
}

export default campaigns;
