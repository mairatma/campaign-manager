'use strict';

import store from '../store/store';
import templates from './ManageCampaigns.soy';
import Actions from '../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

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
		store.dispatch(Actions.removeCampaign(data.index));
	}

	updateTableData_() {
		var data = [];
		for (var i = 0; i < this.campaigns.length; i++) {
			data.push([
				this.campaigns[i].name,
				this.formatDates_(this.campaigns[i].startDate, this.campaigns[i].endDate),
				this.formatGoal_(this.campaigns[i].goal)
			]);
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
