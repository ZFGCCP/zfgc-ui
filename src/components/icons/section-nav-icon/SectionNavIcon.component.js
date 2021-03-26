import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionNavIcon extends React.Component {
	constructor(){
		super();
	}

	componentDidMount(){

	}

	click = () => {
       this.props.onClick(this.props);
    }

	render () {
		return (
			<div className={(this.props.className ? this.props.className + " " : "") + 
					         "convo-box-tab col-3 " + 
					         (this.props.selected === this.props.label ? " selected" : "")} onClick={this.click}><FontAwesomeIcon icon={this.props.icon}/></div>
		)
	}

}

export default SectionNavIcon;