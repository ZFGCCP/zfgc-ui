import React from "react";
import Collapsible from './../../collapsible/collapsible.component.js';

class ProfileSummary extends React.Component {

	constructor() {
		super();
	}

	componentDidMount() {

	}

	render () {
		let rowClassesBase = "flex-column flex-md-row justify-content-between ml-3 mb-3 mr-3";
		let rowClasses = "d-flex " + rowClassesBase;
		let labelClasses = "mb-0 col-12 col-md-6";

		return (
			<div className="profile-summary">
				<Collapsible title="Summary" sizeClass="col-12">
					<div className="summary d-flex flex-column">
						<div className={rowClasses}>
							<label className={labelClasses}>Username</label>
							<div className="col-12 col-md-6">{this.props.user.loginName}</div>
						</div>

						<div className={rowClasses}>
							<label className={labelClasses}>Date Registered</label>
							<div className="col-12 col-md-6">{this.props.user.dateRegisteredAsString}</div>
						</div>

						<div className={rowClasses}>
							<label className={labelClasses}>Primary IP</label>
							<div className="col-12 col-md-6">{this.props.user.primaryIpAddress.ipAddress}</div>
						</div>

						<div className={rowClasses}>
							<label className={labelClasses}>Primary Host</label>
							<div className="col-12 col-md-6">{this.props.user.primaryHostname.hostname}</div>
						</div>

						<div className={rowClasses}>
							<label className={labelClasses}>Local Time</label>
							<div className="col-12 col-md-6">{this.props.user.userLocalTimeAsString}</div>
						</div>

						<div className={rowClasses}>
							<label className={labelClasses}>Last Active</label>
							<div className="col-12 col-md-6">01/01/2020</div>
						</div>

						<div className="d-flex flex-column ml-3">
							<label className={labelClasses}>Signature</label>
							<div className="signature-wrapper" dangerouslySetInnerHTML={{ __html: this.props.user.profileSummary.signaturePreview}}></div>
						</div>
					</div>
				</Collapsible>

				<Collapsible title="Contact Info" sizeClass="col-12" className={this.props.user.userContactInfo.hasContactInfo ? "d-block" : "d-none"}>
					<div className="contact-info d-flex flex-column">
						<div className={(this.props.user.userContactInfo.email ? "d-flex " : "dnone ") + rowClassesBase}>
							<label className={labelClasses}>Email</label>
							<div className="col-12 col-md-6">{this.props.user.userContactInfo.email.emailAddress}</div>
						</div>

						<div className={(this.props.user.userContactInfo.facebook ? "d-flex " : "dnone ") + rowClassesBase}>
							<label className={labelClasses}>Facebook</label>
							<div className="col-12 col-md-6">
								<a href={"https://www.facebook.com/" + this.props.user.userContactInfo.facebook + "/"}>{this.props.user.userContactInfo.facebook}</a>
							</div>
						</div>

						<div className={(this.props.user.userContactInfo.gtalk ? "d-flex " : "dnone ") + rowClassesBase}>
							<label className={labelClasses}>Hangouts</label>
							<div className="col-12 col-md-6">{this.props.user.userContactInfo.gtalk}</div>
						</div>

						<div className={(this.props.user.userContactInfo.nnid ? "d-flex " : "dnone ") + rowClassesBase}>
							<label className={labelClasses}>NNID</label>
							<div className="col-12 col-md-6">{this.props.user.userContactInfo.nnid}</div>
						</div>

						<div className={(this.props.user.userContactInfo.steam ? "d-flex " : "dnone ") + rowClassesBase}>
							<label className={labelClasses}>Steam</label>
							<div className="col-12 col-md-6">
								<a href={"https://steamcommunity.com/id/" + this.props.user.userContactInfo.steam}>{this.props.user.userContactInfo.steam}</a>
							</div>
						</div>
					</div>
				</Collapsible>
			</div>
		)
	}

}

export default ProfileSummary;