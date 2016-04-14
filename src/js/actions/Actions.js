'use strict';

import ActionTypes from './ActionTypes';

export default {
	updateState(state) {
		return {
			type: ActionTypes.UPDATE_DATA,
			state: state
		};
	}
};
