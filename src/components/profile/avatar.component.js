import React from 'react';
import Image from 'react-bootstrap/Image';

class Avatar extends React.Component {
	constructor(){
		super();
	}

	componentDidMount(){

	}

	renderAvatar(){
		let imageUrl = process.env.REACT_APP_API_URL + "/contentstream/avatar/-1";
		if(this.props.avatar && this.props.avatar !== null){
			if(this.props.avatar.avatarTypeId === 2 || this.props.avatar.avatarTypeId === 4){
				imageUrl = process.env.REACT_APP_API_URL + "/contentstream/avatar/" + this.props.avatar.avatarId;
			}
			else if(this.props.avatar.avatarTypeId === 3){
				imageUrl = this.props.avatar.avatarUrl;
			}
		}

		return <Image src={imageUrl}/>
	}

	render() {
		return (
			<div className="avatar-wrapper">
				{this.renderAvatar()}
			</div>
		)
	}
}

export default Avatar;