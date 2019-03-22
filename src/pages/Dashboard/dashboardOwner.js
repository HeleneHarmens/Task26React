import React, { Component } from 'react';
import RestaurantView from '../../components/ResturantView/ResturantView';
import './dashboard.css';

export default class DashboardOwner extends Component {
   constructor() {
       super();
       this.state = {
          restaurants: [],
          currentUser: {
              id: 1
          }
       };
   }

   handleChange(e) {
    this.setState({currentUser: {id: e.target.value} });
  }

   componentDidMount() {
    fetch(`https://myassapi.herokuapp.com/restaurant/user/${this.state.currentUser.id}`)
    .then(results => {
        return results.json(); 
    })
    .then(json => { 
        this.setState({restaurants: json});
    });
   }

   render() {
       let restaurantCollection = this.state.restaurants.map((res) => {
           return(
               <RestaurantView
               key={res.restaurant_id}
               name={res.name}
               address={res.address}
               category={res.category}
               description={res.description}
               />
           );
       });
       console.log(this.state);
       return(
           <>
           <p>Your restaurants</p>
           <div className="restaurantList">
           {restaurantCollection}
           </div>
           </>
       );
   }
}