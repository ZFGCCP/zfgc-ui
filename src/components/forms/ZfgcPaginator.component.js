import React from 'react';
import Form from 'react-bootstrap/Form';
import { faEnvelopeSquare, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ZfgcPaginator extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	componentWillMount(){
		let state = this.state;
		this.setState(state);
	}

	componentDidMount(){
		let state = this.state;
		this.setState(state);
	}

	handleArrowClickLeft = (event) => {
		if(this.props.pagedCollection.pageNo > 1){
			this.props.pagedCollection.pageNo -= 1;
			
			this.props.clickCallback();
		}
	};

	handleArrowClickRight = (event) => {
		if(this.props.pagedCollection.pageNo < this.props.pagedCollection.totalPages){
			this.props.pagedCollection.pageNo += 1;
			
			this.props.clickCallback();
		}
	};

	render () {
		return (
			<Form.Group className="paginator d-flex align-items-center col-12 pl-1 mt-2">
				<Form.Label className="col-2 pl-0 pr-0 pt-2 ">Page </Form.Label>
				<FontAwesomeIcon icon={faCaretLeft} className={(this.props.pagedCollection.pageNo === 1 ? "disabled" : '') + " left"} onClick={this.handleArrowClickLeft}/>
				<Form.Control type="input" name="paginator" className="col-1" value={this.props.pagedCollection.pageNo} onChange={ (c) => super.changeField(c, 'pageNo') }/>
				<FontAwesomeIcon icon={faCaretRight} className={(this.props.pagedCollection.pageNo === this.props.pagedCollection.totalPages ? "disabled" : '' ) + " right"} onClick={this.handleArrowClickRight}/>
				<Form.Label className="ml-3 mb-0"> of {this.props.pagedCollection.totalPages}</Form.Label>
			</Form.Group>
		)
	}
}

export default ZfgcPaginator;
