'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.EDIT_CAMPAIGN:
			return action.id;
	}
	return state || null;
}

export default campaigns;
