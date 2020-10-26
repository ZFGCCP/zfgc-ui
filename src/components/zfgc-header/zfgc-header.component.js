import React from 'react';
import {Link} from "react-router-dom";
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import NavTab from '../nav-tab/nav-tab.component.js';

class ZfgcHeader extends React.Component {
	render () {
		return (
			<div className="zfgc-header">
				<div className="title-heading">
					Zelda Fan Game Central
				</div>
				<div className="nav-heading">
					<NavTab tooltip="Home" faIcon={faHome}></NavTab>
					<NavTab tooltip="Forum" faIcon={faUsers}></NavTab>
					<NavTab tooltip="Members" faIcon={faAddressBook}></NavTab>
					<NavTab tooltip="Search" faIcon={faSearch}></NavTab>
				</div>
				<div className="user-heading">
					Welcome, friend!<br/>
					<Link to='/signin'>Sign in</Link> or Register
				</div>
			</div>
		);
	}
}

export default ZfgcHeader;