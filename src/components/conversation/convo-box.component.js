import React from "react";
import Collapsible from './../../components/collapsible/collapsible.component.js';
import ConvoBoxFilters from './convo-box-filters.component.js';
import { faInbox, faArchive, faHistory, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SectionNavIcon from "./../../components/icons/section-nav-icon/SectionNavIcon.component.js";
import LookupEndpoints from "./../../utilities/axios/lookups.endpoints.js";
import ConvoEndpoints from "./../../utilities/axios/convo.endpoints.js";

class ConvoBox extends React.Component {
	constructor(){
		super();
		this.SwapSection = this.SwapSection.bind(this);

		this.state = {};
		this.loadConvoBox = this.loadConvoBox.bind(this);
	}

	componentWillMount(){
		this.convoBox = {};
		this.settings = {
			openTabName: "Inbox",

		};
		this.setState({convos : {boxId : 0, pageNo : 1, conversations : []}});
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
			this.loadConvoBox(0, 1);
		});
	}

	loadConvoBox(boxId, pageNo){
		ConvoEndpoints.getConvoBox(boxId, pageNo).then(data => {
			let state = this.state;
			state.convos = data.data;
			state.convos.boxId = boxId;
			state.convos.pageNo = pageNo;
			this.setState(state);
		});
	}

	SwapSection(iconProps){
		this.settings.openTabName = iconProps.label;
		this.loadConvoBox(iconProps.iconId, 1);
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
			result.push(<SectionNavIcon icon={this.getIcon(lkup.id)} label={this.getLabel(lkup.id)} iconId={lkup.id} onClick={this.SwapSection} selected={this.settings.openTabName}/>);
		}

		return result;
	}

	renderConvos() {
		let result = [];

		if(this.state.convos){
			for(let convo of this.state.convos.conversations){
				result.push(
					<div className="message d-flex justify-content-between p-2">
						<div className="message-details">
							<span className="detail"><input type="checkbox"/></span>
							<span className="detail from">From: {convo.senderName}</span>
							<span className="pl-3 pl-lg-0 detail subject">{convo.subject}</span>
						</div>
						<div className="detail">{convo.sentDtAsString}</div>
					</div>
				);
			}
		}

		return result;
	}

	render() {
		let convos = this.state.convos;
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
						<ConvoBoxFilters convos={convos} boxRefreshCallback={this.loadConvoBox}/>

						<div className="convo-box-messages zfgc-form">
							{this.renderConvos()}
						</div>
					</div>
				</Collapsible>
			</div>
		)
	}
}

export default ConvoBox;