'use strict';

import ActionTypes from '../actions/ActionTypes';
import campaigns from './campaigns';
import page from './page';

function destinations(state) {
	return state || [];
}

function audiences(state) {
	return state || [];
}

function banners(state) {
	return state || [];
}

function displays(state) {
	return state || [];
}

var combined = Redux.combineReducers({
	campaigns,
	destinations,
	audiences,
	banners,
	displays,
	page
});

function rootReducer(state, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_DATA:
			return action.state;
	}
	return combined(state, action);
}

export default rootReducer;
