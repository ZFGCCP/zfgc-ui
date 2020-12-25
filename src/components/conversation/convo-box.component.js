import React from "react";
import Collapsible from './../../components/collapsible/collapsible.component.js';

class ConvoBox extends React.Component {
	constructor(){
		super();
	}

	componentDidMount(){

	}

	render() {
		return (
			<div className="justify-content-center d-flex">
				<Collapsible title="Conversation Box">
					<div className="convo-box-header">
						
					</div>

					<div className="convo-box-body">
						<div className="convo-box-tabs">
							<div className="col-3">Inbox</div>
							<div className="col-3">Outbox</div>
							<div className="col-3">Archived</div>
							<div className="col-3">Legacy</div>
						</div>
					</div>
				</Collapsible>
			</div>
		)
	}
}

export default ConvoBox;