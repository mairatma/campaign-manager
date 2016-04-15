'use strict';

import store from './store/store';
import Dashboard from './components/pages/Dashboard';
import { EditCampaign } from './components/pages/EditCampaign.soy';
import ManageCampaigns from './components/pages/ManageCampaigns';
import Router from 'metal-router';

class Main {
	static run() {
		Router.route('/', Dashboard, store.getState);
		Router.route('/manage-campaigns', ManageCampaigns, store.getState);
		Router.route('/create-campaign', EditCampaign, store.getState);
		Router.router().dispatch();

		store.subscribe(Main.refreshState);
		return this;
	}

	static refreshState() {
		Router.activeComponent.setState(store.getState());
	}
}

export default Main;
