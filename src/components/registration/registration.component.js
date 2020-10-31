import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import Collapsible from './../collapsible/collapsible.component.js';
import LookupEndpoints from './../../utilities/axios/lookups.endpoints.js';
import jstz from 'jstz';

class Registration extends React.Component {
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

			this.setState({newUser : user.data});
		});
	}

	renderTimeZones(){
		let items = [];

		if(this.lookups && this.lookups !== null){
			for(let lkup of this.lookups.TIMEZONE){
				items.push(<option value={lkup.id}>{lkup.value}</option>);
			}
		}

		return items;
	}

	checkRequiredFields(){

	}

	changeField(control, field){
		let user = this.state.newUser;
		user[field] = control.target.value;
		this.state.newUser = user;
		this.setState(this.state);
	}

	render () {

		return (
			<div className="justify-content-center d-flex">
				<Collapsible>
					<div className="sign-in-form">
						<Form className="zfgc-form">
							<Form.Group>
								<Form.Label>Username</Form.Label>
								<Form.Control type="input" name="username" onChange={(c) => this.changeField(c, 'username')}></Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Label>Display Name</Form.Label>
								<Form.Control type="input" name="displayName" onChange={(c) => this.changeField(c, 'displayName')}></Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password"></Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Label>Email Address</Form.Label>
								<Form.Control type="input" name="email"></Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Label>Timezone</Form.Label>
								<Form.Control as="select" onChange={(c) => this.changeField(c, 'timeOffset') } value={this.state && this.state.newUser ? this.state.newUser.timeOffset : '5'} custom>
									{this.renderTimeZones()}
								</Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Check type="checkbox" label="I agree to the terms of service and am at least 13 years of age."/>
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