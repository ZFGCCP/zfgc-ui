import React from 'react';

export default class AuthStore {
	static myInstance = null;

	jwtToken = null;
	loggedInUser = null;
	refresh = null;
	headerRefresh = null;
	footerRefresh = null;

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

	getHeaderRefresh(){return this.headerRefresh;}
	setHeaderRefresh(refresh){
		this.headerRefresh = refresh
	}

	getFooterRefresh(){return this.footerRefresh;}
	setFooterRefresh(refresh){
		this.footerRefresh = refresh
	}

	getRefreshToken () { return this.refreshToken };
	getJwtToken (){ return this.jwtToken};
	setJwtToken (jwt, refresh, localStore) { 
		this.jwtToken = jwt; 
		this.freshToken = refresh;

		if(localStore === true){
			localStorage.setItem('zfgc-jwt', jwt); 
			localStorage.setItem('zfgc-refresh', refresh);
		}

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