import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// to remove
import Form from 'react-bootstrap/Form';


class Collapsible extends React.Component {
    
    render() {

        let headerClass = this.props.title == null || this.props.title.trim().length == 0 ? 'd-none' : '';
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className={headerClass}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {this.props.title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="sign-in-form">
                            <Form className="zfgc-form">
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="input" name="username"></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password"></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check type="checkbox" label="Stay signed in"></Form.Check>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">Sign in</Button>
                                    <Button variant="secondary">Go Back</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Collapsible;