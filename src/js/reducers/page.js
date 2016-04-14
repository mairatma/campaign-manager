'use strict';

import ActionTypes from '../actions/ActionTypes';

function page(state, action) {
	switch (action.type) {
		case ActionTypes.SWITCH_PAGE:
			return action.page;
	}
	return state || 0;
}

export default page;
