import AuthStore from './../common/AuthStore.common.js'
import axios from 'axios'


export default class ZfgcApi {
	static myInstance = null;
	ax = null;

	static getInstance() {
		if(ZfgcApi.myInstance == null){
			ZfgcApi.myInstance = new ZfgcApi();
		}

		return this.myInstance;
	}

	

	constructor(){
		this.ax = axios.create({
					baseURL: "http://localhost:8080/forum/"
					});

		this.ax.interceptors.request.use(req => {
			if(AuthStore.getInstance().getJwtToken() !== null){
				req.headers.authorization = "bearer " + AuthStore.getInstance().getJwtToken();
			}

			return req;
		},
		err => {
			let responseCode = err.response.status;
			if(responseCode === 401){
				//check for a refresh token
				//if it exists, attempt to get a new token
				let refresh = localStorage.getItem('zfgc-refresh');
				if(refresh === null){
					//boot back to the login page
				}

			}
		});
	}

	

	get(url){
		return this.ax.get(url);
	}

	post(url, body, headers){
		return this.ax.post(url, body, headers);
	}
};