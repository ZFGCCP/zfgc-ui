import React from 'react';
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import NavTab from '../nav-tab/nav-tab.component.js';
import Image from 'react-bootstrap/Image';
import ZfgcLogo from  './../../assets/images/title-lg.png';
import ZfgcLogoXs from './../../assets/images/title-xs.png';
import UserDetails from './user-details.component.js';
import AuthStore from './../../utilities/common/AuthStore.common.js';

class ZfgcHeader extends React.Component {
	constructor() {
		super();
		this.refresh = this.refresh.bind(this);

		AuthStore.getInstance().setHeaderRefresh(this.refresh);
	}

	componentDidMount(){
		
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
			<div className="zfgc-header">
				<div className="title-heading">
					<Image src={ZfgcLogo} className="d-none d-lg-inline-block"></Image>
					<Image src={ZfgcLogoXs} className="d-inline-block d-lg-none"></Image>
				</div>
				<div className="nav-heading d-none d-md-flex">
					<NavTab tooltip="Home" faIcon={faHome}></NavTab>
					<NavTab tooltip="Forum" faIcon={faUsers}></NavTab>
					{this.renderMemberLink()}
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