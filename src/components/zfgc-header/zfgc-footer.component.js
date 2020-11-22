import React from 'react';
import NavTab from '../nav-tab/nav-tab.component.js';
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import AuthStore from './../../utilities/common/AuthStore.common.js';

class ZfgcFooter extends React.Component {
	constructor(){
		super();

		this.refresh = this.refresh.bind(this);
		AuthStore.getInstance().setFooterRefresh(this.refresh);
	}

	refresh() {
		this.setState({});
	}

	renderMemberLink(){
		if(AuthStore.getInstance().getLoggedInUser() && AuthStore.getInstance().getLoggedInUser() !== null && AuthStore.getInstance().getLoggedInUser().member){
			return <NavTab tooltip="Members" faIcon={faAddressBook} link="/members"></NavTab>
		}

		return '';
	}

	render () {
		return (
			<div className="zfgc-footer d-block d-md-none mt-5 pl-3 pr-3">
				<div className="nav-heading d-flex justify-content-between mt-2">
					<NavTab tooltip="Home" faIcon={faHome}></NavTab>
					<NavTab tooltip="Forum" faIcon={faUsers}></NavTab>
					{this.renderMemberLink()}
					<NavTab tooltip="Search" faIcon={faSearch}></NavTab>
				</div>
			</div>
		)
	}
}

export default ZfgcFooter;