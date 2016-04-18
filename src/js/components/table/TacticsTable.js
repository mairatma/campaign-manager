'use strict';

import dom from 'metal-dom';
import templates from './TacticsTable.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../table/Table.soy';

class TacticsTable extends Component {
	created() {
		this.formatTableData_();
		this.on('tacticsChanged', this.formatTableData_);
		this.on('selectedTacticIdsChanged', this.formatTableData_);
	}

	handleTableClicked_() {
		if (dom.hasClass(event.target, 'table-action-remove')) {
			var row = parseInt(dom.parent(event.target, 'tr').getAttribute('data-row'), 10);
			var tacticIds = this.selectedTacticIds.concat();
			tacticIds.splice(row, 1);
			this.selectedTacticIds = tacticIds;
		}
	}

	formatTableData_() {
		var data = [];
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
