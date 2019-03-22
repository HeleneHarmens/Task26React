import React, { Component } from 'react';
import './recentReviews.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'review/latest';
const PARTRest = 'restaurant';

class RecentReviews extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                recentReviewsArr: [],
                restaurantArr: []
            }
        }
    
        componentDidMount() {
            fetch(API + PART)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        recentReviewsArr: data
                    })
                }).catch(err => {
                });

            fetch(API + PARTRest)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        restaurantArr: data
                    })
                }).catch(err => {
                });
        }

        
        mapStuffTogether() {
            

        }

        
    
    render(){

        
    
        const recentReviewShow = this.state.recentReviewsArr.map(rest => (
            <p key={rest.review_id}><i>"{rest.review_text}"</i></p>
        ));

        const restaurantShow = this.state.restaurantArr.map(rest => (
          <p key={rest.restaurant_id}><i>"{rest.restaurant_id}"</i> - {rest.name}
          </p>
        ));

        
    
    
        return (
            <div className="Search">
            <React.Fragment>
                <div className='App-body'>
                    <br/>
                    <h4 className='restaurant'>Recent Reviews</h4>
                    <div>
                        {recentReviewShow}
                    </div>
                </div>
            </React.Fragment>  
            </div>
        )
    }

}

export default RecentReviews;