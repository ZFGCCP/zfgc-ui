import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// to remove
import Form from 'react-bootstrap/Form';


class Collapsible extends React.Component {

    constructor(){
        super();
        this.state = {opened : true};
    }

    handleExpand() {
        this.setState({opened : !this.state.opened});
    }

    render() {

        let headerClass = this.props.title == null || this.props.title.trim().length == 0 ? 'd-none' : '';
        let squareIcon = this.state.opened ? faMinusSquare : faPlusSquare;
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className={headerClass}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => this.handleExpand()}>
                            <h3><FontAwesomeIcon className="mr-2" icon={squareIcon}/>{this.props.title}</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {this.props.children}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Collapsible;