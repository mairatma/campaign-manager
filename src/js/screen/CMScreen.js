'use strict';

import store from '../store/store';
import Actions from '../actions/Actions';
import Screen from 'senna/src/screen/Screen';

class CMScreen extends Screen {
	constructor(page) {
		super();
		this.page = page;
	}

	flip() {
		store.dispatch(Actions.switchPage(this.page));
	}
}

export default CMScreen;
