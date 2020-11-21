import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

class NavTab extends React.Component {
    render() {


        return (
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>{this.props.tooltip}</Tooltip>}>
                <div className="mr-2 mr-lg-3 nav-tab">
                	<Link to={this.props.link}>
                    	<FontAwesomeIcon icon={this.props.faIcon} className="nav-icon" />
                    </Link>
                </div>
            </OverlayTrigger>
        );
    }
}

export default NavTab;