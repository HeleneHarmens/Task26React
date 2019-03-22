import React from 'react';
import RestaurantCards from '../../components/cards/RestaurantCards';


class RestaurantPage extends React.Component{

    state = {
        restaurants: [],
        reviews: [],
        avgRating:[]
    };
    

    componentDidMount() {
        fetch("https://myassapi.herokuapp.com/restaurant")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    restaurants: findresponse
                });
            });
        fetch(`https://myassapi.herokuapp.com/review`)
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    reviews: findresponse
                });
            });
        fetch(`https://myassapi.herokuapp.com/review/average`)
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    avgRating: findresponse
                });
            }); 
    }


    render(){
 
        const listRestaurants = this.state.restaurants.map(res => (
            <RestaurantCards
                key={res.restaurant_id}
                id={res.restaurant_id}
                name={res.name}
                address={res.address}
                desc = {res.description}
                category = {res.category}
                allReviews = {this.state.reviews.filter(reviews => reviews.restaurant_id === res.restaurant_id)}
                avgRating = {this.state.avgRating}
            />
        ));
        
        //const avgRating = listRestaurants.allReviews.rating.reduce((sum, amount) => sum + amount);
        console.log(listRestaurants);
    return (
      <React.Fragment>
        <br />
        <h3 align ="center">Restaurants</h3>
        <hr />

        <div className="row " style={{ margin: 10 }}>
          {listRestaurants}
        
        </div>
      </React.Fragment>
    ); 
    }
}

export default RestaurantPage;
