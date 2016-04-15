'use strict';

import store from '../store/store';
import templates from './Header.soy';
import Actions from '../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Header extends Component {
	setSourceUrl() {
		store.dispatch(Actions.setSourceUrl(this.currentUrl));
	}
}
Soy.register(Header, templates);

export default Header;
