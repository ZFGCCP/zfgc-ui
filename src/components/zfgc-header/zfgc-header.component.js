import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {Link} from "react-router-dom";
import { faHome, faUsers, faAddressBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ZfgcHeader extends React.Component {
	render () {
		return (
			<div className="zfgc-header">
				<div className="title-heading">
					Zelda Fan Game Central
				</div>
				<div className="nav-heading">
					<OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>Home</Tooltip>}>
						<div className="nav-tab">
							 <FontAwesomeIcon icon={faHome} className="nav-icon" alt="Home"/>
						</div>
					</OverlayTrigger>
					<OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>Forum</Tooltip>}>
						<div className="nav-tab">
							<FontAwesomeIcon icon={faUsers} className="nav-icon"/>
						</div>
					</OverlayTrigger>
					<OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>Members</Tooltip>}>
						<div className="nav-tab">
							<FontAwesomeIcon icon={faAddressBook} className="nav-icon"/>
						</div>
					</OverlayTrigger>
					<OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>Search</Tooltip>}>
						<div className="nav-tab">
							<FontAwesomeIcon icon={faSearch} className="nav-icon"/>
						</div>
					</OverlayTrigger>
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