'use strict';

import templates from './ManageCampaigns.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../cards/Card.soy';
import '../Header.soy';
import '../table/CampaignTable.soy';

class ManageCampaigns extends Component {
	created() {
		this.filterCampaigns_();
		this.on('campaignsChanged', this.filterCampaigns_);
	}

	search(data) {
		this.searchValue_ = data.newVal;
		this.filterCampaigns_();
	}

	filterCampaigns_() {
		this.filteredCampaigns = this.campaigns.filter((campaign) => {
			return !this.searchValue_ ||
				campaign.name.toLowerCase().startsWith(this.searchValue_.toLowerCase());
		});
	}
}
Soy.register(ManageCampaigns, templates);

ManageCampaigns.STATE = {
	campaigns: {
		validator: Array.isArray
	}
};

export default ManageCampaigns;
