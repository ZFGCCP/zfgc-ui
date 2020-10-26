import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavTab extends React.Component {
    render() {
        return (
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip>{this.props.tooltip}</Tooltip>}>
                <div className="nav-tab">
                    <FontAwesomeIcon icon={this.props.faIcon} className="nav-icon" />
                </div>
            </OverlayTrigger>
        );
    }
}

export default NavTab;