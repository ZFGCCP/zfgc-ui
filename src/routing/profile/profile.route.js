import React from 'react';
import Collapsible from './../../components/collapsible/collapsible.component.js';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import ZfgcForm from './../../components/forms/ZfgcForm.component.js';
import { Link, useLocation} from "react-router-dom"
import Avatar from './../../components/profile/avatar.component.js';

class ProfileRoute extends ZfgcForm {

	constructor() {
		super();
	}

	componentDidMount() {
		let query = new URLSearchParams(this.props.location.search);
		let userId = query.get("userId");
		UserEndpoints.getUserProfile({userId : userId}).then(data => {
			super.initForm(data.data);
		});
	}

	render () {
		return (
			<div className="justify-content-center d-flex">
				{super.getState() !== null ? 
					<Collapsible>
						<div className="d-flex profile-wrapper pt-3 pb-3">
							<div className="col-12 col-lg-4">
								<div className="basic-details d-flex flex-column">
									<h5>{super.getState().vm.displayName}</h5>
									<h6>{super.getState().vm.primaryMemberGroup.groupName}</h6>
									<Avatar avatar={super.getState().vm.personalInfo.avatar}/>
									<div className="personal-text-wrapper">{super.getState().vm.personalInfo.personalText}</div>
								</div>
								<div className="utility-details d-flex flex-column mt-4">
									<div>Show posts</div>
									<div>Show stats</div>
									<div>Show karma</div>
								</div>
							</div>
							<div className="col-12 col-lg-8">

							</div>
						</div>
					</Collapsible> : ''
				}
			</div>
		)
	}

}

export default ProfileRoute;