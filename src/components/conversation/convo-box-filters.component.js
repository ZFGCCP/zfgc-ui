import React from "react";
import ZfgcForm from "./../forms/ZfgcForm.component.js";
import Form from 'react-bootstrap/Form';

class ConvoBoxFilters extends ZfgcForm {
	constructor() {
		super();
		this.lookups = {};
		this.lookups.sortBy = [{id : "DISPLAY_NAME", value: "Most Recent"}, 
							   {id: "DATE_REGISTERED", value: "Most Recent Unread"}, 
							   {id: "GROUP_NAME", value: "Sender"},
							   {id: "GROUP_NAME", value: "Starting User"}];

		this.lookups.sortOrder = [{id : "ASC", value: "Asc"}, {id : "DESC", value: "Desc"}];
	}

	componentDidMount(){
		super.initForm(this.props.convoBox);
	}

	render () {
		return (
			<div>
				<Form noValidate className="zfgc-form">
					<Form.Group className="header-form d-flex flex-wrap flex-sm-nowrap col-12 pl-1 mt-2">
						<Form.Label className="col-12 col-sm-2 pl-0 pr-0 pt-2 ">Order By: </Form.Label>
						<Form.Control className="col-12 col-sm-8 mr-sm-1" as="select" name="sortBy">
							{super.renderSelectOptions(this.lookups, "sortBy")}
						</Form.Control>
						<Form.Control className="col-12 col-sm-2" as="select" name="order">
							{super.renderSelectOptions(this.lookups, "sortOrder")}
						</Form.Control>
					</Form.Group>
				</Form>
			</div>
		)
	}
}

export default ConvoBoxFilters;