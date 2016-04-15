'use strict';

import store from '../../store/store';
import templates from './CampaignTable.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../table/Table.soy';

class CampaignTable extends Component {
	created() {
		this.formatTableData_();
		this.on('campaignsChanged', this.formatTableData_);
	}

	edit(data) {
		var id = this.tableDataIds_[data.index];
		store.dispatch(Actions.startCampaignEdition(id, this.currentUrl));
	}

	formatDate_(date) {
		return MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
	}

	formatDates_(start, end) {
		return this.formatDate_(start) + ' to ' + this.formatDate_(end);
	}

	formatGoal_(goal) {
		return 'Lead Generation - ' + goal.generation.count + ' new contacts in 2 weeks';
	}

	formatTableData_() {
		var data = [];
		this.tableDataIds_ = [];
		for (var i = 0; i < this.campaigns.length; i++) {
			data.push([
				this.campaigns[i].name,
				this.formatDates_(this.campaigns[i].startDate, this.campaigns[i].endDate),
				this.formatGoal_(this.campaigns[i].goal),
				'/edit-campaign/' + this.campaigns[i].id
			]);
			this.tableDataIds_.push(this.campaigns[i].id);
		}
		this.tableData = data;
	}

	remove(data) {
		store.dispatch(Actions.removeCampaign(this.tableDataIds_[data.index]));
	}
}
Soy.register(CampaignTable, templates);

CampaignTable.STATE = {
	campaigns: {
		validator: Array.isArray
	},
	currentUrl: {
	}
};

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December'];

export default CampaignTable;
