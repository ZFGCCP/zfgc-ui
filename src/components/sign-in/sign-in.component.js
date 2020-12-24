import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import AuthStore from './../../utilities/common/AuthStore.common.js';
import Collapsible from './../../components/collapsible/collapsible.component.js';
import ZfgcForm from './../../components/forms/ZfgcForm.component.js';

class SignIn extends ZfgcForm {


	componentDidMount(){
		let signInForm = {
			"username": null,
			"password": null,
			"signedIn": false
		};

		super.initForm(signInForm);
	}

	

	handleSubmit = (event) => {
		event.preventDefault();

		let auth = UserEndpoints.getClausiusLogin(super.getState().vm);
		auth.then(data => {
			AuthStore.getInstance().setJwtToken(data.data.access_token, data.data.expires_in, super.getState().vm.signedIn);
			let user = UserEndpoints.getLoggedInUser();
			AuthStore.getInstance().getRefresh()();
		});
    };

    render () {

	return (
		<div className="justify-content-center d-flex">
			<Collapsible>
				<div className="sign-in-form">
					<Form className="zfgc-form" onSubmit={this.handleSubmit}>
	                    <Form.Group>
	                        <Form.Label>Username</Form.Label>
	                        <Form.Control type="input" name="username" onChange={ (c) => super.changeField(c, 'username') }></Form.Control>
	                    </Form.Group>

	                    <Form.Group>
	                        <Form.Label>Password</Form.Label>
	                        <Form.Control type="password" name="password" onChange={ (c) => super.changeField(c, 'password') }></Form.Control>
	                    </Form.Group>

	                    <Form.Group>
	                        <Form.Check type="checkbox" label="Stay signed in" onChange={ (c) => super.changeFieldBool(c, 'signedIn') }></Form.Check>
	                    </Form.Group>

	                    <Form.Group>
	                        <Button variant="primary" type="submit">Sign in</Button>
	                        <Button variant="secondary">Go Back</Button>
	                    </Form.Group>
	                </Form>
                </div>
			</Collapsible>
		</div>
	)
	}

}



export default SignIn;