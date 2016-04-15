'use strict';

import templates from './ManageCampaigns.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../cards/Card.soy';
import '../Header.soy';
import '../table/CampaignTable.soy';

class ManageCampaigns extends Component {
	created() {
		this.filterAndSortCampaigns_();
		this.on('campaignsChanged', this.filterAndSortCampaigns_);
	}

	search(data) {
		this.searchValue_ = data.newVal;
		this.filterAndSortCampaigns_();
	}

	sort(event) {
		this.sortBy_ = event.target.value;
		this.sortCampaigns_();
	}

	filterAndSortCampaigns_() {
		this.filterCampaigns_();
		this.sortCampaigns_();
	}

	filterCampaigns_() {
		this.filteredCampaigns = this.campaigns.filter((campaign) => {
			return !this.searchValue_ ||
				campaign.name.toLowerCase().startsWith(this.searchValue_.toLowerCase());
		});
	}

	sortCampaigns_() {
		this.filteredCampaigns = this.filteredCampaigns.sort((c1, c2) => {
			if (this.sortBy_ === 'date') {
				var start = c1.startDate - c2.startDate;
				return start !== 0 ? start : c1.endDate - c2.endDate;
			} else {
				return c1.name.localeCompare(c2.name);
			}
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
