import React from 'react';
import Collapsible from './../collapsible/collapsible.component.js';
import ZfgcForm from './../forms/ZfgcForm.component.js';
import Form from 'react-bootstrap/Form';
import { faEnvelopeSquare, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserEndpoints from './../../utilities/axios/users.endpoints.js';

class MemberList extends ZfgcForm {

	constructor(){
		super();
		this.lookups = {};
		this.lookups.sortBy = [{id : "DISPLAY_NAME", value: "Username"}, {id: "DATE_REGISTERED", value: "Member Since"}, {id: "GROUP_NAME", value: "Member Group"}];
		this.lookups.sortOrder = [{id : "ASC", value: "Asc"}, {id : "DESC", value: "Desc"}];
		
	}

	componentDidMount() {
		UserEndpoints.getMembersList({'pageNo' : 1, 'usersPerPage' : 10, 'sortBy' : 'DISPLAY_NAME', 'sortOrder' : 'ASC'}).then(data => {
			data.data.pageNo = 1;
			data.data.sortBy = 'DISPLAY_NAME';
			data.data.sortOrder = 'ASC';
			super.initForm(data.data);
		});
	}

	callMemberList(){
		return UserEndpoints.getMembersList({'pageNo' : this.state.vm.pageNo, 
											 'usersPerPage': 10, 
											 'sortBy' : this.state.vm.sortBy, 
											 'sortOrder' : this.state.vm.sortOrder});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.callMemberList().then(data => {
			super.initForm(data.data);
		});
	};

	handleArrowClickLeft = (event) => {
		if(this.state.vm.pageNo > 1){
			this.state.vm.pageNo -= 1;
			
			this.callMemberList().then(data => {
				data.data.pageNo = this.state.vm.pageNo;
				super.initForm(data.data);
			});
		}
	};

	handleArrowClickRight = (event) => {
		if(this.state.vm.pageNo < this.state.vm.totalPages){
			this.state.vm.pageNo += 1;
			
			this.callMemberList().then(data => {
				data.data.pageNo = this.state.vm.pageNo;
				super.initForm(data.data);
			});
		}
	};

	changeSorting = (event) => {
		super.changeField(event, 'sortBy');

		this.callMemberList().then(data => {
			super.initForm(data.data);
		});
	};

	changeSortingOrder = (event) => {
		super.changeField(event, 'sortOrder');

		this.callMemberList().then(data => {
			super.initForm(data.data);
		});
	}

	renderUserPanels(){
		let items = [];

		if(this.state && this.state !== null && this.state.vm && this.state.vm !== null){
			let members = this.state.vm.members ? this.state.vm.members.slice(0) : [];
			for(const member of members){
				items.push(
					<div className="user-panel p-3">
						<div className="panel-inner">
							<div>
								<h4 className="ml-4 mb-0">{member.displayName} <span><FontAwesomeIcon icon={faEnvelopeSquare}/></span></h4>
								<h6 className="ml-4">{member.groupName}</h6>
							</div>
							<div className="ml-4"><label className="mb-0">Member Since:</label> {member.dateRegisteredAsString}</div>
							{member.ipAddress !== null ? <div className="ml-4">{member.ipAddress}</div> : ''}
						</div>
							
					</div>
				);
			}
		}

		return items;
	}

	render () {
		return (
			<div className="justify-content-center d-flex">
				<Collapsible title="Members">
					<div className="member-list-header">
						<Form noValidate className="zfgc-form" onSubmit={this.handleSubmit}>
							<Form.Group className="header-form d-flex col-12 pl-1 mt-2">
								<Form.Label className="col-2 pl-0 pr-0 pt-2 ">Order By: </Form.Label>
								<Form.Control className="col-8 mr-1"as="select" name="sortBy" required onChange={ (c) => this.changeSorting(c) }>
									{super.renderSelectOptions(this.lookups, "sortBy")}
								</Form.Control>
								<Form.Control className="col-2" as="select" name="order" required onChange={ (c) => this.changeSortingOrder(c) }>
									{super.renderSelectOptions(this.lookups, "sortOrder")}
								</Form.Control>
							</Form.Group>

							<Form.Group className="paginator d-flex align-items-center col-12 pl-1 mt-2">
								<Form.Label className="col-2 pl-0 pr-0 pt-2 ">Page </Form.Label>
								<FontAwesomeIcon icon={faCaretLeft} className={(this.state && this.state.vm.pageNo === 1 ? "disabled" : '') + " left"} onClick={this.handleArrowClickLeft}/>
								<Form.Control type="input" name="paginator" className="col-1" value={this.state ? this.state.vm.pageNo : ''} onChange={ (c) => super.changeField(c, 'pageNo') }/>
								<FontAwesomeIcon icon={faCaretRight} className={(this.state && this.state.vm.pageNo === this.state.vm.totalPages ? "disabled" : '' ) + " right"} onClick={this.handleArrowClickRight}/>
								<Form.Label className="ml-3 mb-0"> of {this.state ? this.state.vm.totalPages : '1'}</Form.Label>
							</Form.Group>
						</Form>
					</div>
					<div className="user-panels-wrapper">
						{this.renderUserPanels()}
					</div>
				</Collapsible>
			</div>
		)
	}

}

export default MemberList;