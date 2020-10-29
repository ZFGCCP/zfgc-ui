import React from 'react';

export default class AuthStore {
	static myInstance = null;

	jwtToken = null;
	loggedInUser = null;
	refresh = null;

	static getInstance() {
		if(AuthStore.myInstance == null){
			AuthStore.myInstance = new AuthStore();
		}

		return this.myInstance;
	}

	getJwtToken (){ return this.jwtToken};
	setJwtToken (jwt, refresh) { 
		this.jwtToken = jwt; 
		this.freshToken = refresh;

		localStorage.setItem('zfgc-jwt', jwt); 
		localStorage.setItem('zfgc-refresh', refresh);

		console.log("stored JWT");
	};

	getLoggedInUser () { return this.loggedInUser; };
	setLoggedInUser (user) {
		this.loggedInUser = user;
		console.log("stored logged in user");
	};
}