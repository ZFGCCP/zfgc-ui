import React from "react";
import Collapsible from './../collapsible/collapsible.component.js';
import UserEndpoints from './../../utilities/axios/users.endpoints.js';
import ZfgcForm from './../forms/ZfgcForm.component.js';
import { Link, useLocation, Switch, Route} from "react-router-dom"
import Avatar from './../profile/avatar.component.js';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProfileSummary from './profile-info/ProfileSummary.component.js';

class Profile extends ZfgcForm {

	constructor(props) {
		super();
	}

	componentDidMount() {
		let query = new URLSearchParams(this.props.location.search);
		this.userId = query.get("userId");
		UserEndpoints.getUserProfile({userId : this.userId}).then(data => {
			super.initForm(data.data);

			UserEndpoints.getUserNavigation({userId : this.userId}).then(data => {
				let tempState = super.getState();
				tempState.nav = data.data;
				super.setState(tempState);
			});
		});
	}

	handleNavClick(tab){
		for(const nav of this.getState().nav){
			nav.isSelected = false;
		}

		tab.isSelected = !tab.isSelected;

		super.setState(this.getState());
	}

	renderNavigation(){
		let tabArray = [];
		if(this.getState().nav){
			let nav = this.getState().nav;
			
			for(const tab of nav){
				tabArray.push(
					<Link to={"/profile/profileinfo?userId=" + this.userId } className={"nav-item" + (tab.isSelected ? " selected" : "")} onClick={(e) => this.handleNavClick(tab)}>
						{tab.title}
					</Link>
				);
			}
		}

		return tabArray;
	}

	render () {
		return (
			<div className="justify-content-center d-flex">
				{super.getState() !== null ? 
					<Collapsible sizeClass="col-11 col-md-9 col-lg-8">
						<div className="d-block d-lg-flex profile-wrapper pt-3 pb-3">
							<div className="col-12 col-lg-4 d-flex d-lg-block">
								<div className="basic-details d-flex flex-column">
									<h5>{super.getState().vm.displayName}</h5>
									<h6>{super.getState().vm.primaryMemberGroup.groupName}</h6>
									<Avatar avatar={super.getState().vm.personalInfo.avatar}/>
									<div className="personal-text-wrapper d-none d-lg-block">{super.getState().vm.personalInfo.personalText}</div>
								</div>
								<div className="utility-details d-flex flex-column mt-4">
									<div className="d-flex quick-comm-wrapper">
										<FontAwesomeIcon icon={faEnvelopeSquare}/>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-8">
								<div className="nav-wrapper d-flex justify-content-between">
									{this.renderNavigation()}
								</div>
								<div>
									<Switch>
										<Route path="/profile/profileinfo" render={(props) => <ProfileSummary user={super.getState().vm} {...props} />}/>
									</Switch>
								</div>
							</div>
						</div>
					</Collapsible> : ''
				}
			</div>
		)
	}
}

export default Profile;