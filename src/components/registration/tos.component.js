import React from 'react';
import ZfgcForm from './../forms/ZfgcForm.component.js';
import Collapsible from './../collapsible/collapsible.component.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

class TosForm extends React.Component {
	componentDidMount(){

	}


	handleSubmit = (event) => {
		event.preventDefault();
     	event.stopPropagation();
    };

	render () {

		return  (
			<div className="justify-content-center d-flex">
				<Collapsible>
					<div className="sign-in-form">
						<form className="zfgc-form" onSubmit={this.handleSubmit}>
							<div className="d-flex flex-column">
								<label>Please read and review the following Terms of Service and privacy policy:</label>

								<div className="tos-container">
									You agree, through your use of this forum, that you will not post any material which is false, defamatory, inaccurate, abusive, vulgar, 
									hateful, harassing, obscene, profane, sexually oriented, threatening, invasive of a person's privacy, adult material, or otherwise in 
									violation of any International or United States Federal law. You also agree not to post any copyrighted material unless you own the 
									copyright or you have written consent from the owner of the copyrighted material. Spam, flooding, advertisements, chain letters, pyramid 
									schemes, and solicitations are also forbidden on this forum.<br/><br/>

									Note that it is impossible for the staff or the owners of this forum to confirm the validity of posts. Please remember that we do not actively
									monitor the posted messages, and as such, are not responsible for the content contained within. We do not warrant the accuracy, completeness, 
									or usefulness of any information presented. The posted messages express the views of the author, and not necessarily the views of this forum, 
									its staff, its subsidiaries, or this forum's owner. Anyone who feels that a posted message is objectionable is encouraged to notify an 
									administrator or moderator of this forum immediately. The staff and the owner of this forum reserve the right to remove objectionable 
									content, within a reasonable time frame, if they determine that removal is necessary. This is a manual process, however, please realize that 
									they may not be able to remove or edit particular messages immediately. This policy applies to member profile information as well.<br/><br/>

									You remain solely responsible for the content of your posted messages. Furthermore, you agree to indemnify and hold harmless the owners of this 
									forum, any related websites to this forum, its staff, and its subsidiaries. The owners of this forum also reserve the right to reveal your 
									identity (or any other related information collected on this service) in the event of a formal complaint or legal action arising from any situation 
									used by your use of this forum.<br/><br/>

									You have the ability, as you register, to choose your username. We advise that you keep the name appropriate. With this user account you are about 
									to register, you agree to never give your password out to another person except an administrator, for your protection and for validity reasons. You 
									also agree to NEVER use another person's account for any reason.  We also HIGHLY recommend you use a complex and unique password for your account, 
									to prevent account theft.<br/><br/>

									After you register and login to this forum, you will be able to fill out a detailed profile. It is your responsibility to present clean and accurate 
									information. Any information the forum owner or staff determines to be inaccurate or vulgar in nature will be removed, with or without prior notice. 
									Appropriate sanctions may be applicable.<br/><br/>

									Please note that with each post, your IP address is recorded, in the event that you need to be banned from this forum or your ISP contacted. This will 
									nly happen in the event of a major violation of this agreement.<br/><br/>

									Also note that the software places a cookie, a text file containing bits of information (such as your username and password), in your browser's cache. 
									This is ONLY used to keep you logged in/out. The software does not collect or send any other form of information to your computer.
								</div>

								<Form.Group>
									<Link to='/registration/new-user'>
										<Button variant="primary" type="submit">Proceed With Account Creation</Button>
									</Link>
									<Button variant="secondary">Go Back</Button>
								</Form.Group>
							</div>
						</form>
					</div>

				</Collapsible>
			</div>
		)
	}
}

export default TosForm;