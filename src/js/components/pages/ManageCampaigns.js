'use strict';

import store from '../../store/store';
import templates from './ManageCampaigns.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../cards/Card.soy';
import '../Header.soy';
import '../table/Table.soy';

class ManageCampaigns extends Component {
	created() {
		this.updateTableData_();
		this.on('campaignsChanged', this.updateTableData_);
	}

	formatDate_(date) {
		return MONTHS[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear();
	}

	formatDates_(start, end) {
		return this.formatDate_(start) + ' to ' + this.formatDate_(end);
	}

	formatGoal_(goal) {
		return 'Lead Generation - ' + goal.generation.count + ' new contacts in 2 weeks';
	}

	remove(data) {
		store.dispatch(Actions.removeCampaign(this.tableDataIds_[data.index]));
	}

	search(data) {
		this.updateTableData_(
			this.campaigns.filter(campaign => campaign.name.startsWith(data.newVal))
		);
	}

	updateTableData_(opt_campaigns) {
		var campaigns = opt_campaigns || this.campaigns;
		var data = [];
		this.tableDataIds_ = [];
		for (var i = 0; i < campaigns.length; i++) {
			data.push([
				campaigns[i].name,
				this.formatDates_(campaigns[i].startDate, campaigns[i].endDate),
				this.formatGoal_(campaigns[i].goal)
			]);
			this.tableDataIds_.push(campaigns[i].id);
		}
		this.tableData = data;
	}
}
Soy.register(ManageCampaigns, templates);

ManageCampaigns.STATE = {
	campaigns: {
		validator: Array.isArray
	}
};

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December'];

export default ManageCampaigns;
