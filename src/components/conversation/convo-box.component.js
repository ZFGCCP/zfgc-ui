import React from "react";
import Collapsible from './../../components/collapsible/collapsible.component.js';
import ConvoBoxFilters from './convo-box-filters.component.js';
import { faInbox, faArchive, faHistory, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SectionNavIcon from "./../../components/icons/section-nav-icon/SectionNavIcon.component.js";
import LookupEndpoints from "./../../utilities/axios/lookups.endpoints.js";

class ConvoBox extends React.Component {
	constructor(){
		super();
		this.SwapSection = this.SwapSection.bind(this);

		this.state = {};
	}

	componentWillMount(){
		this.convoBox = {};
		this.settings = {
			openTabName: "Inbox",

		};
	}

	componentDidMount(){
		this.lookups = null;
		LookupEndpoints.getLookupsList("LKUP_CONVO_BOX_TYPE").then(data => {
			this.settings.openTabName = data.data.LKUP_CONVO_BOX_TYPE[0].value;
			this.lookups = data.data;

			this.settings.labelToIcon = [];

			this.settings.labelToIcon[0] = faInbox;
			this.settings.labelToIcon[1] = faPaperPlane;
			this.settings.labelToIcon[2] = faArchive;
			this.settings.labelToIcon[3] = faHistory;
			

			this.setState(this.state);
		});
	}

	SwapSection(iconProps){
		this.settings.openTabName = iconProps.label;
		this.setState(this.state);
	}

	getLabel(index){
		if(!this.lookups || !this.lookups.LKUP_CONVO_BOX_TYPE || this.lookups.LKUP_CONVO_BOX_TYPE === null || this.lookups.LKUP_CONVO_BOX_TYPE.length === 0){
			return "";
		}

		return this.lookups.LKUP_CONVO_BOX_TYPE[index].value;
	}

	getIcon(index){
		if(!this.settings.labelToIcon){
			return "";
		}

		return this.settings.labelToIcon[index];
	}

	renderNav(){
		if(!this.lookups){
			return "";
		}

		let result = [];
		for(let lkup of this.lookups.LKUP_CONVO_BOX_TYPE){
			result.push(<SectionNavIcon icon={this.getIcon(lkup.id)} label={this.getLabel(lkup.id)} onClick={this.SwapSection} selected={this.settings.openTabName}/>);
		}

		return result;
	}

	render() {
		return (
			<div className="justify-content-center d-flex convo-box-wrapper">
				<Collapsible title="Conversation Box">
					<div className="convo-box-header">
						<div className="convo-box-tabs d-flex justify-content-around">
							{this.renderNav()}
						</div>
						<div className="d-flex justify-content-center">
							<h4>{this.settings.openTabName}</h4>
						</div>
					</div>

					<div className="convo-box-body">
						<ConvoBoxFilters convoBox={this.convoBox}/>

						<div className="convo-box-messages">
							<div className="message">
								<div>Title</div>
								<div>timestamp</div>
								<div>Last Message By: </div>
								<div>Started by: </div>
								<div>blah blah a...</div>
							</div>
						</div>
					</div>
				</Collapsible>
			</div>
		)
	}
}

export default ConvoBox;