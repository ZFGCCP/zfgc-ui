import React from 'react'
import ZfgcApi from './zfgc-api.endpoints.js'
import AuthStore from './../common/AuthStore.common.js'

class UserEndpoints extends React.Component {

	static async getClausiusLogin(body){
		return ZfgcApi.getInstance().post('users/auth/login', body);
	}

	static async getClausiusRefresh(body){
		return ZfgcApi.getInstance().post('users/auth/refresh', body);
	}

	static async getLoggedInUser(){
		return ZfgcApi.getInstance().get('users/loggedInUser');
	}

	static async getNewUserTemplate(){
		return ZfgcApi.getInstance().get('users/newuser/template');
	}

	static async registerNewUser(body){
		return ZfgcApi.getInstance().post('users/newuser', body);
	}

	static async getMembersList(params){
		return ZfgcApi.getInstance().get('users/member-list?pageNo=' + params.pageNo + "&usersPerPage=" + params.usersPerPage + "&sortBy=" + params.sortBy + "&sortOrder=" + params.sortOrder);
	}

}

export default UserEndpoints;