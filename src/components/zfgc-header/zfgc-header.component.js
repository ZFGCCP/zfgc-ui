import React from 'react';
import {Link} from "react-router-dom";

class ZfgcHeader extends React.Component {
	render () {
		return (
			<div className="zfgc-header">
				<div className="user-heading">
					Welcome, friend!<br/>
					<Link to='/signin'>Sign in</Link> or Register
				</div>
			</div>
		);
	}
}

export default ZfgcHeader;