import React from 'react';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import AuthStore from './../../utilities/common/AuthStore.common.js';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { faDoorOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserDetails extends React.Component {

	constructor(){
		super();

		this.refresh = this.refresh.bind(this);
	}

	componentDidMount(){
		AuthStore.getInstance().setUserDetailsRefresh(this.refresh);
		this.refresh();
	}

	refresh() {
		//check for access token in auth store first
		//if we dont find it there, go to local storage
		let token = AuthStore.getInstance().getJwtToken();
		let refresh = AuthStore.getInstance().getRefreshToken();

		if(token === null){
			token = localStorage.getItem('zfgc-jwt');
			refresh = localStorage.getItem('zfgc-refresh');
		}

		if(token !== undefined && token !== null){
			AuthStore.getInstance().setJwtToken(token, refresh);
			let auth = UserEndpoints.getLoggedInUser();

			auth.then(data => {
				if(data.data.usersId !== null){
					AuthStore.getInstance().setLoggedInUser(data.data);
				}

				this.setState({});
				AuthStore.getInstance().getHeaderRefresh()();
				AuthStore.getInstance().getFooterRefresh()();
			});
		}
	}

	handleLogout = (event) => {
		AuthStore.getInstance().clearJwt();
		this.setState({});
		AuthStore.getInstance().getHeaderRefresh()();
		AuthStore.getInstance().getFooterRefresh()();
	};

	render(){

		let userRender = <div>
							Welcome, friend!<br/>
							<Link to='/signin'>Sign in</Link> or <Link to="/registration">Register</Link>
						</div>;
		if(AuthStore.getInstance().getLoggedInUser() !== null){
			userRender = <div className="logged-in-wrapper">
						 	<Image src={AuthStore.getInstance().getLoggedInUser().personalInfo.avatar.avatarUrl} rounded></Image>
						 	<span>
							 	{AuthStore.getInstance().getLoggedInUser().displayName}
							 	<span>
							 		<FontAwesomeIcon icon={faDoorOpen} onClick={this.handleLogout} className="logout-button"/>
							 		<FontAwesomeIcon icon={faEnvelope}/>
							 	</span>
						 	</span>
			             </div>;
		}

		return (
			<div>
			{userRender}
			</div>
		);
	}

}

export default UserDetails;