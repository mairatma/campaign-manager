'use strict';

import store from './store/store';
import Dashboard from './components/pages/Dashboard';
import { EditCampaign } from './components/pages/EditCampaign.soy';
import ManageCampaigns from './components/pages/ManageCampaigns';
import Router from 'metal-router';

class Main {
	static run() {
		new Router({
			path: '/',
			component: Dashboard,
			initialState: () => store.getState()
		}, false);
		new Router({
			path: '/manage-campaigns',
			component: ManageCampaigns,
			initialState: () => store.getState()
		}, false);
		new Router({
			path: '/create-campaign',
			component: EditCampaign,
			initialState: () => store.getState()
		}, false);

		Router.router().dispatch();

		store.subscribe(Main.refreshState);
		return this;
	}

	static refreshState() {
		Router.activeComponent.setState(store.getState());
	}
}

export default Main;
