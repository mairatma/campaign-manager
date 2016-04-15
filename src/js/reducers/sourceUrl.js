'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.SET_SOURCE_URL:
			return action.sourceUrl || '/';
	}
	return state || '/';
}

export default campaigns;
