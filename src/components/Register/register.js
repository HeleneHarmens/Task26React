import React, { Component } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'user/';
const ACTION = "create";

class Register extends React.Component {
    
    constructor() {
        super();
        this.state = {
            newUser: {
                username: '',
                email: '',
                password: '',
                role: 0 
            }           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
   componentDidMount() {
    fetch(API + PART)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                people: data,
                username: data,
                email: data,
                password: data
            })
        }).catch(err => {
        }
   }
   */

    handleChange(e) {
        const user = this.state.newUser;
        user[e.target.name] = e.target.value;
        this.setState({newUser: user});
        console.log(this.state.newUser);
    }

    handleRole(e) {
        const user = this.state.newUser;
        user.role = e.target.value;
        this.setState({newUser: user});
        console.log(this.state.newUser);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const {newUser} = this.state;
        console.log('Submit');
        console.log(newUser);
    
        axios.post(API + PART + ACTION, newUser)
        .then(function (response) {
          console.log(response);
    
        })
        .catch(function (error) {
          console.table(error);
        });
    
    }

    


    render() {

        return (
            <div className="Register">
                <h3>REGISTER</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name ="username" type="username" onChange={this.handleChange} placeholder="Enter username" 
                                         defaultValue={this.state.newUser.username} required="required"  />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email"
                                         defaultValue={this.state.newUser.email} required="required" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={this.handleChange} placeholder="Password" 
                                         defaultValue={this.state.newUser.password} required="required"/>
                    </Form.Group>

                    

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Role</Form.Label>
                        <br/>
                        <select value ={this.state.newUser.role} onChange={this.handleRole}>
                        <option name="reviewer" type="role" defaultValue="0" value ="0">Reviewer</option>
                        <option name="owner" type="role" value ="1">Owner</option>
                        </select>
                        
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Register!
                    </Button>

                </Form>
            </div>
        );
    }
}



export default Register;