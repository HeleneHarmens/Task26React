import React, { Component } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'user';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

   componentDidMount() {
    fetch(API + PART)
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            people: data
        })
    }).catch(err => {
    });
}


    render() {

        return (
            <div className="Login">
                     
                <h3>REGISTER</h3>
                <Form>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Owner" />
                        <Form.Check type="checkbox" label="Reviewer" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Register me!
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;