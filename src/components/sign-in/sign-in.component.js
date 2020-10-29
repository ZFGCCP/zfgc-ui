import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import AuthStore from './../../utilities/common/AuthStore.common.js';

function SignIn()  {

	/*function handleAuthenticate(event){
		event.preventDefault();
	}*/
	let signInForm = {
		"username": null,
		"password": null
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		signInForm.username = event.target[0].value;
		signInForm.password = event.target[1].value;
		let auth = UserEndpoints.getClausiusLogin(signInForm);
		auth.then(data => {
			AuthStore.getInstance().setJwtToken(data.data.access_token, data.data.expires_in);
			let user = UserEndpoints.getLoggedInUser();
		});
		

  };

	return (
		<div className="sign-in-form justify-content-center d-flex">
			<Form className="zfgc-form col-6" onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control type="input" name="username"></Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" name="password"></Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Check type="checkbox" label="Stay signed in"></Form.Check>
				</Form.Group>

				<Form.Group>
					<Button variant="primary" type="submit">Sign in</Button>
					<Button variant="secondary">Go Back</Button>
				</Form.Group>
			</Form>
		</div>
	);

}



export default SignIn;