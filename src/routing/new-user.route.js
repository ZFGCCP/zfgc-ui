import React from 'react';
import TosForm from './../components/registration/tos.component.js';
import Registration from './../components/registration/registration.component.js';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link, useRouteMatch
} from "react-router-dom";

function NewUserRoute() {
	let { path, url } = useRouteMatch();

	return (
		<div>
			<Switch>
				<Router>
					<Route exact path={path}>
						<TosForm/>
					</Route>
					<Route path={path + "/new-user"}>
						<Registration/>
					</Route>
				</Router>
			</Switch>
		</div>
	);
}

export default NewUserRoute;