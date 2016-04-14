'use strict';

import ActionTypes from '../actions/ActionTypes';

function rootReducer(state, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_DATA:
			return action.state;
	}
	return state;
}

export default rootReducer;
