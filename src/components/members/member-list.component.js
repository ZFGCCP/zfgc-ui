import React from 'react';
import Collapsible from './../collapsible/collapsible.component.js';
import ZfgcForm from './../forms/ZfgcForm.component.js';
import Form from 'react-bootstrap/Form';


class MemberList extends ZfgcForm {

	constructor(){
		super();
	}

	componentDidMount() {

	}

	render () {
		return (
			<div className="justify-content-center d-flex">
				<Collapsible title="Members">
					<div className="member-list-header">
						<Form noValidate className="zfgc-form">
							<Form.Group className="header-form d-flex col-12 pl-1 mt-2">
								<Form.Label className="col-2 pl-0 pr-0 pt-2 ">Order By: </Form.Label>
								<Form.Control className="col-8 mr-1"as="select" name="orderBy" required></Form.Control>
								<Form.Control className="col-2" as="select" name="orderBy" required></Form.Control>
							</Form.Group>
						</Form>
					</div>
					<div>
						<h4>MG-Zero</h4>
					</div>
				</Collapsible>
			</div>
		)
	}

}

export default MemberList;