import React, { Component } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { URLSearchParams } from 'url';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'user';

class Login extends React.Component {
    
    constructor() {
        super();

        this.state = {
            persons: ['hello', 'hello'], 
        };
    }
    /*
    componentDidMount() {
        fetch(API + PART)
        .then(response => response.json())
        .then(data => this.setState({ hits: data.persons }));
    }
    */

   componentDidMount() {
    fetch(API + PART)
    .then( response => {
        if (!response.ok) { throw response } // Return the complete error response for debugging purposes
        return response.json()  //we only get here if there is no error
      })
      
      .then( data => {
        this.setState({persons: data.persons }); 
      })
      
}



    render() {
        return (
            <div className="Login">
                     
                <h3>LOGIN</h3>
                <Form>
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
                        Submit
                    </Button>
                </Form>

                <p>json: {this.state.persons}</p> 

            </div>
        );
    }
}

export default Login;