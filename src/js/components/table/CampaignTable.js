'use strict';

import dom from 'metal-dom';
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

	handleTableClicked_(event) {
		if (dom.hasClass(event.target, 'glyphicon')) {
			var row = parseInt(dom.parent(event.target, 'tr').getAttribute('data-row'), 10);
			var id = this.tableDataIds_[row];
			if (dom.hasClass(event.target, 'table-action-remove')) {
				store.dispatch(Actions.removeCampaign(id));
			} else {
				store.dispatch(Actions.startCampaignEdition(id, this.currentUrl));
			}
		}
	}

	formatDate_(date) {
		return MONTHS[date.month - 1] + ' ' + date.date + ', ' + date.year;
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
				{
					text: this.campaigns[i].name
				},
				{
					text: this.formatDates_(this.campaigns[i].startDate, this.campaigns[i].endDate)
				},
				{
					text: this.formatGoal_(this.campaigns[i].goal)
				},
				{
					cssClass: 'glyphicon glyphicon-cog table-action-icon table-action-edit',
					href: '/edit-campaign/' + this.campaigns[i].id
				},
				{
					cssClass: 'glyphicon glyphicon-trash table-action-icon table-action-remove'
				}
			]);
			this.tableDataIds_.push(this.campaigns[i].id);
		}
		this.tableData = data;
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
