import React from 'react';
import Profile from './../../components/profile/profile.component.js';


class ProfileRoute extends React.Component {
	render () {
		return (
			<div>
				<Profile location={this.props.location}/>
			</div>
		)
	}

}

export default ProfileRoute;