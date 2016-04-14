'use strict';

import ActionTypes from './ActionTypes';

export default {
	switchPage(page) {
		return {
			type: ActionTypes.SWITCH_PAGE,
			page: page
		};
	},

	updateState(state) {
		return {
			type: ActionTypes.UPDATE_DATA,
			state: state
		};
	}
};
