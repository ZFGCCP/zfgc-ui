import React from 'react';

export default class AuthStore {
	static myInstance = null;

	jwtToken = null;

	static getInstance() {
		if(AuthStore.myInstance == null){
			AuthStore.myInstance = new AuthStore();
		}

		return this.myInstance;
	}

	getJwtToken (){ return this.jwtToken};
	setJwtToken (jwt) { this.jwtToken = jwt; console.log("stored JWT")};
}