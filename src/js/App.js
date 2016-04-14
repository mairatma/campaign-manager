'use strict';

import templates from './App.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';
import store from './store/store';

class App extends Component {
	created() {
		this.setState(store.getState());
		store.subscribe(() => this.setState(store.getState()));
	}
}
Soy.register(App, templates);

export default App;
