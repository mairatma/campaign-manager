'use strict';

import CMActionTypes from './CMActionTypes';
import CMDispatcher from '../dispatcher/CMDispatcher';

class CMActions {
	static updateData(data) {
		CMDispatcher.dispatch({
			type: CMActionTypes.UPDATE_DATA,
			data: data
		});
	}
}

export default CMActions;
