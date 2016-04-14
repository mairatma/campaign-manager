'use strict';

import templates from './Table.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Table extends Component {
	handleClickEdit_(event) {
		var index = parseInt(event.delegateTarget.getAttribute('data-index'), 10);
		this.emit('editClicked', {
			index: index,
			item: this.data[index]
		});
	}

	handleClickRemove_(event) {
		var index = parseInt(event.delegateTarget.getAttribute('data-index'), 10);
		this.emit('removeClicked', {
			index: index,
			item: this.data[index]
		});
	}
}
Soy.register(Table, templates);

export default Table;
