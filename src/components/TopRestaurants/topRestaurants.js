import React, { Component } from 'react';
import './topRestaurants.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'restaurant';

class TopRestaurants extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                topRestaurantsArr: []
            }
        }
    
        componentDidMount() {
            fetch(API + PART)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    topRestaurantsArr: data
                })
            }).catch(err => {
            });
        }

        
    
    render(){

        
    
        const cards = this.state.topRestaurantsArr.map(rest => (
          <p key={rest.restaurant_id}>{rest.name}</p>
        ));
    
    
        return (
            <div className="Search">
            <React.Fragment>
                <div className='App-body'>
                    <br/>
                    <h4 className='restaurant'>Top Restaurants</h4>
                    <div>
                        {cards}
                    </div>
                </div>
            </React.Fragment>  
            </div>
        )
    }

}

export default TopRestaurants;