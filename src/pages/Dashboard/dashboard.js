import React, { Component } from 'react';
import Person from './partials/Person';

export default class Dashboard extends Component {
   constructor(props) {
       super();
       this.state = {
           persons: []
       };
   }

   componentDidMount() {
       fetch('https://myassapi.herokuapp.com/user')
       .then(results => {
           return results.json();
       }).then(json => {
           this.setState({persons: json});
       });
   }

   render() {
       let users = this.state.persons.map((user) => {
           return(
               <Person
                   key={user.id}
                   id={user.id}
                   username={user.username}
                   password={user.password}
                   email={user.email}
                   role={user.role}
               />
           )
       })
       return(
           <div>
               {users}
           </div>
       );
   }
}