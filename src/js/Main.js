'use strict';

import store from './store/store';
import templates from './Main.soy';
import CMScreen from './screen/CMScreen';
import Component from 'metal-component';
import PageTypes from './constants/PageTypes';
import Route from 'senna/src/route/Route';
import Senna from 'senna';
import Soy from 'metal-soy';

import './components/pages/Dashboard.soy';
import './components/pages/EditCampaign.soy';
import './components/pages/ManageCampaigns.soy';

class Main extends Component {
	created() {
		this.setState(store.getState());
		store.subscribe(() => this.setState(store.getState()));

		this.setUpSenna();
	}

	setUpSenna() {
		this.sennaApp_ = new Senna();
		this.sennaApp_.addRoutes([
			new Route('/', () => new CMScreen(PageTypes.DASHBOARD)),
			new Route('/manage-campaigns', () => new CMScreen(PageTypes.MANAGE_CAMPAIGNS)),
			new Route('/create-campaign', () => new CMScreen(PageTypes.CREATE_CAMPAIGN))
		]);
	}
}
Soy.register(Main, templates);

export default Main;
