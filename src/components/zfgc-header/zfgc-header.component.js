import React from 'react';
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import NavTab from '../nav-tab/nav-tab.component.js';
import Image from 'react-bootstrap/Image';
import ZfgcLogo from  './../../assets/images/title-lg.png';
import UserDetails from './user-details.component.js';

class ZfgcHeader extends React.Component {
	render () {
		return (
			<div className="zfgc-header">
				<div className="title-heading">
					<Image src={ZfgcLogo}></Image>
				</div>
				<div className="nav-heading">
					<NavTab tooltip="Home" faIcon={faHome}></NavTab>
					<NavTab tooltip="Forum" faIcon={faUsers}></NavTab>
					<NavTab tooltip="Members" faIcon={faAddressBook}></NavTab>
					<NavTab tooltip="Search" faIcon={faSearch}></NavTab>
				</div>
				<div className="user-heading">
					<UserDetails></UserDetails>
				</div>
			</div>
		);
	}
}

export default ZfgcHeader;