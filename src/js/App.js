'use strict';

import templates from './App.soy';
import CMStore from './stores/CMStore';
import Component from 'metal-component';
import Soy from 'metal-soy';

class App extends Component {
	created() {
		this.setState(CMStore.get());
		CMStore.on('change', () => this.setState(CMStore.get()));
	}
}
Soy.register(App, templates);

export default App;
