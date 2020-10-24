import React from 'react';
import ZfgcApi from './zfgc-api.endpoints';
import AuthStore from './../common/AuthStore.common.js';

class UserEndpoints extends React.Component {

	static async getClausiusLogin(body){
		return ZfgcApi.post('users/auth/login', body);
	}

	static async getLoggedInUser(){
		let accessToken = AuthStore.getInstance().getJwtToken(); 
		ZfgcApi.get('users/loggedInUser', {headers : {
			'Authorization' : 'bearer ' + accessToken.access_token
		}});
	}

}

export default UserEndpoints;