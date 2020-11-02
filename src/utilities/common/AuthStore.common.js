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

	
	getRefresh(){return this.refresh;}
	setUserDetailsRefresh(refresh){
		this.refresh = refresh;
	}

	getJwtToken (){ return this.jwtToken};
	setJwtToken (jwt, refresh) { 
		this.jwtToken = jwt; 
		this.freshToken = refresh;

		localStorage.setItem('zfgc-jwt', jwt); 
		localStorage.setItem('zfgc-refresh', refresh);

		console.log("stored JWT");
	};

	clearJwt(){
		this.jwtToken = null; 
		this.freshToken = null;
		this.loggedInUser = null;

		localStorage.removeItem('zfgc-jwt'); 
		localStorage.removeItem('zfgc-refresh');

		console.log("cleared JWT");
	};

	getLoggedInUser () { return this.loggedInUser; };
	setLoggedInUser (user) {
		this.loggedInUser = user;
		console.log("stored logged in user");
	};
}