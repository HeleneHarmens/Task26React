import React, { Component } from 'react';
import axios from 'axios';

export default class DashboardCommon extends Component {
   constructor() {
       super();
       this.state = {
           // Dummy user
           currentUser: {
            user_id: 3,
            username: "hello",
            password: "audaudh",  
            email: "dd@dd.com",
            role: 1
          }
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
     const user = this.state.currentUser;
     user[e.target.name] = e.target.value;
     this.setState({currentUser: user});
     console.log(this.state.currentUser);
   }

   handleSubmit(e) {
     e.preventDefault();  
    const {currentUser} = this.state;
    console.log('Submit');
    console.log(currentUser);
    
     axios.post('http://myassapi.herokuapp.com/user/update', currentUser)
     .then(function (response) {
       console.log(response);
       
     })
     .catch(function (error) {
       console.table(error);
     });

   }

   render() {
       return(
         <>
           <form onSubmit={this.handleSubmit}>
               <label>Edit user info</label>
               <br/>
               <label htmlFor="username"></label>
               <input name="username" type="text" onChange={this.handleChange} defaultValue={this.state.currentUser.username}/>
               <label htmlFor="password"></label>
               <input name="password" type="password" onChange={this.handleChange} defaultValue={this.state.currentUser.password} />
               <label htmlFor="email"></label>
               <input name="email" type="text" onChange={this.handleChange} defaultValue={this.state.currentUser.email} />
               <input type="submit" value="Update"/>
           </form>
           </>
       );
   }
}