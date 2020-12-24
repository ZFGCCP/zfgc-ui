import React from 'react';
import ZfgcForm from './../forms/ZfgcForm.component.js';
import Collapsible from './../collapsible/collapsible.component.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PostRegistration extends React.Component {
	componentDidMount(){

	}

	render () {
		return  (
			<div className="justify-content-center d-flex">
				<Collapsible>
					<div className="sign-in-form">
						<form className="zfgc-form" onSubmit={this.handleSubmit}>
							<div className="d-flex flex-column">
								<label className="green"><FontAwesomeIcon icon={faCheckCircle}/> You have successfully registered a new account. An activation email has been sent to you.</label>

								<Form.Group>
									<Button variant="secondary">Go Home</Button>
								</Form.Group>
							</div>
						</form>
					</div>
				</Collapsible>
			</div>
		)
	}
}

export default PostRegistration;