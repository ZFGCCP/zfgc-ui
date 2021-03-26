import React from 'react';
import ZfgcApi from './zfgc-api.endpoints.js';

class ConvoEndpoints extends ZfgcApi {
	static async getConvoBox(filterType, pageNo){
		return ZfgcApi.getInstance().post("pm/convobox?filterType=" + filterType + "&pageNo=" + pageNo);
	}
}

export default ConvoEndpoints;