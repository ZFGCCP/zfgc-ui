import React, { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';

function ApiErrorAlert(props){
	let [show, setShow] = useState(true);

	function renderErrors(errors){
		let result = [];

		for(let i = 0; i < errors.length; i++){
			result.push(
				<li>{errors[i].errorMessage}</li>
			);
		}

		return result;
	}

	return (
	    <div className="zfgc-alert">
	      <Alert show={show} variant="danger" onClose={() => props.onClose()} dismissible>
	        <Alert.Heading>Oops! Something went wrong!</Alert.Heading>
	        <p>
	          <h3>Errors</h3>
	          <ul>
	          	{renderErrors(props.errors.validationErrors)}
	          	{renderErrors(props.errors.ruleErrors)}
	          </ul>
	          <hr/>
	        </p>
	      </Alert>
	    </div>
 	 );
}


export default ApiErrorAlert;