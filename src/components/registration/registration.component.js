import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import Collapsible from './../collapsible/collapsible.component.js';
import LookupEndpoints from './../../utilities/axios/lookups.endpoints.js';
import jstz from 'jstz';
import ZfgcForm from './../forms/ZfgcForm.component.js';

class Registration extends ZfgcForm {

	componentDidMount(){

		Promise.all([UserEndpoints.getNewUserTemplate(), LookupEndpoints.getLookupsList("TIMEZONE")]).then(([user, lkups]) => {
			this.lookups = lkups.data;
			let tz = jstz.determine();

			for(let lkup of this.lookups.TIMEZONE){
				if(tz.name() == lkup.value){
					user.data.timeOffset = lkup.id;
					break;
				}
			}

			super.initForm(user.data);
		});
	}

	handleSubmit = (event) => {
		const form = event.currentTarget;
    	if (form.checkValidity() === false) {
      	    event.preventDefault();
     	    event.stopPropagation();
     	    form.className += " was-validated";
     	}
    };

	render () {

		return (
			<div className="justify-content-center d-flex">
				<Collapsible>
					<div className="sign-in-form">
						<Form noValidate className="zfgc-form" onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Label>Username</Form.Label>
								<Form.Control type="input" name="username" onChange={(c) => super.changeField(c, 'loginName')} required></Form.Control>
								<Form.Control.Feedback type="invalid">
              						Please choose a username.
            					</Form.Control.Feedback>
							</Form.Group>

							<Form.Group>
								<Form.Label>Display Name</Form.Label>
								<Form.Control type="input" name="displayName" onChange={(c) => super.changeField(c, 'displayName')} required></Form.Control>
								<Form.Control.Feedback type="invalid">
              						Please choose a display name.
            					</Form.Control.Feedback>
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password" required></Form.Control>
								<Form.Control.Feedback type="invalid">
              						Please enter a password.
            					</Form.Control.Feedback>
							</Form.Group>

							<Form.Group>
								<Form.Label>Email Address</Form.Label>
								<Form.Control type="input" name="email" onChange={(c) => super.changeField(c, 'userContactInfo.email.emailAddress')} required></Form.Control>
								<Form.Control.Feedback type="invalid">
              						Please enter an email address.
            					</Form.Control.Feedback>
							</Form.Group>

							<Form.Group>
								<Form.Label>Timezone</Form.Label>
								<Form.Control required as="select" onChange={(c) => super.changeField(c, 'timeOffset') } value={super.getState() && super.getState().vm ? super.getState().vm.timeOffset : '5'} custom>
									{super.renderSelectOptions(this.lookups, "TIMEZONE")}
								</Form.Control>
								<Form.Control.Feedback type="invalid">
              						Please select a timezone.
            					</Form.Control.Feedback>
							</Form.Group>

							<Form.Group>
								<Form.Check type="checkbox" label="I agree to the terms of service and am at least 13 years of age." required/>
							</Form.Group>

							<Form.Group>
								<ReCAPTCHA sitekey="6Lde4o4UAAAAAI0Nkg5Gymqa6l3o9Is7g9-0OYOn"/>
							</Form.Group>


							<Form.Group>
								<Button variant="primary" type="submit">Register</Button>
								<Button variant="secondary">Go Back</Button>
							</Form.Group>
						</Form>
					</div>
				</Collapsible>
			</div>
		)
	}
}

export default Registration;