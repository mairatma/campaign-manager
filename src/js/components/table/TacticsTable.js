'use strict';

import templates from './TacticsTable.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../table/Table.soy';

class TacticsTable extends Component {
	created() {
		this.formatTableData_();
		this.on('tacticsChanged', this.formatTableData_);
	}

	handleTableClicked_() {
	}

	formatTableData_() {
		var data = [];
		this.tableDataIds_ = [];
		for (var i = 0; i < this.selectedTacticIds.length; i++) {
			var id = this.selectedTacticIds[i];
			data.push([
				{
					text: this.destinations[this.tactics[id].destinationId].name
				},
				{
					text: this.tactics[id].name
				},
				{
					cssClass: this.tactics[id].oneToOnePromos.length ? 'glyphicon glyphicon-ok' : ''
				},
				{
					cssClass: this.tactics[id].oneToOnePromos.length ? 'glyphicon glyphicon-ok' : ''
				},
				{
					cssClass: this.tactics[id].promotionalAds.length ? 'glyphicon glyphicon-ok' : ''
				},
				{
					cssClass: 'glyphicon glyphicon-cog table-action-icon table-action-edit'
				},
				{
					cssClass: 'glyphicon glyphicon-trash table-action-icon table-action-remove'
				}
			]);
			this.tableDataIds_.push(id);
		}
		this.tableData = data;
	}
}
Soy.register(TacticsTable, templates);

TacticsTable.STATE = {
	destinations: {
		validator: Array.isArray
	},
	selectedTacticIds: {
		validator: Array.isArray
	},
	tactics: {
		validator: Array.isArray
	}
};

export default TacticsTable;
