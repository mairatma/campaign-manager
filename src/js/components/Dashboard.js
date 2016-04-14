'use strict';

import templates from './Dashboard.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './cards/Card.soy';
import './cards/ImageCard.soy';
import './cards/TableCard.soy';

class Dashboard extends Component {
	created() {
		this.on('campaignsChanged', this.updateCampaignStatistics_);
		this.updateCampaignStatistics_();
	}

	updateCampaignStatistics_() {
		this.totalInfluencedWins = 0;
		this.totalInfluencedCustomers = 0;
		this.totalLeadsCount = 0;
		this.totalBudget = 0;
		this.campaigns.forEach((campaign) => {
			this.totalInfluencedWins += campaign.influencedWins;
			this.totalInfluencedCustomers += campaign.influencedCustomers;
			this.totalLeadsCount += campaign.leadsCount;
			this.totalBudget += campaign.budget;
		});
	}
}
Soy.register(Dashboard, templates);

export default Dashboard;
