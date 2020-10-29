import React from 'react';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import AuthStore from './../../utilities/common/AuthStore.common.js';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { faDoorOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserDetails extends React.Component {

	componentDidMount(){
		this.refresh();
	}

	refresh() {
		//check for access token
		let token = localStorage.getItem('zfgc-jwt');
		let refresh = localStorage.getItem('zfgc-refresh');
		if(token !== undefined && token !== null){
			AuthStore.getInstance().setJwtToken(token, refresh);
			let auth = UserEndpoints.getLoggedInUser();

			auth.then(data => {
				if(data.data.usersId !== null){
					AuthStore.getInstance().setLoggedInUser(data.data);
				}

				this.setState({});
			});
		}
	}

	render(){

		let userRender = <div>
							Welcome, friend!<br/>
							<Link to='/signin'>Sign in</Link> or Register
						</div>;
		if(AuthStore.getInstance().getLoggedInUser() !== null){
			userRender = <div className="logged-in-wrapper">
						 	<Image src={AuthStore.getInstance().getLoggedInUser().personalInfo.avatar.avatarUrl} rounded></Image>
						 	<span>
							 	{AuthStore.getInstance().getLoggedInUser().displayName}
							 	<span>
							 		<FontAwesomeIcon icon={faDoorOpen}/>
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