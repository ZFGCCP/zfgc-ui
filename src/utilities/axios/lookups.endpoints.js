import React from 'react';
import ZfgcApi from './zfgc-api.endpoints.js';

class LookupEndpoints extends React.Component {

	static async getLookupsList(body){
		return ZfgcApi.getInstance().post('lookups/list', body, {headers : {'Content-Type' : 'text/plain'}});
	}

}

export default LookupEndpoints;