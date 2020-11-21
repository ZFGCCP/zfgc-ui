import React from 'react';
import NavTab from '../nav-tab/nav-tab.component.js';
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";

class ZfgcFooter extends React.Component {
	render () {
		return (
			<div className="zfgc-footer d-block d-md-none mt-5 pl-3 pr-3">
				<div className="nav-heading d-flex justify-content-between mt-2">
					<NavTab tooltip="Home" faIcon={faHome}></NavTab>
					<NavTab tooltip="Forum" faIcon={faUsers}></NavTab>
					<NavTab tooltip="Members" faIcon={faAddressBook} link="/members"></NavTab>
					<NavTab tooltip="Search" faIcon={faSearch}></NavTab>
				</div>
			</div>
		)
	}
}

export default ZfgcFooter;