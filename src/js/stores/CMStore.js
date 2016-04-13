'use strict';

import CMActionTypes from '../actions/CMActionTypes';
import CMDispatcher from '../dispatcher/CMDispatcher';
import { FluxStore } from 'metal-flux';

var data = {};

class CMStore extends FluxStore {
	get() {
		return data;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case CMActionTypes.UPDATE_DATA:
				data = payload.data;
				this.emit(FluxStore.EVENT_CHANGE);
				break;
		}
	}
}

export default new CMStore(CMDispatcher);
