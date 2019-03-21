import React, { Component } from 'react';
import './recentReviews.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const API = 'https://myassapi.herokuapp.com/';
const PART = 'review/restaurant/1';

class RecentReviews extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                recentReviewsArr: []
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
        }

        
    
    render(){

        
    
        const cards = this.state.recentReviewsArr.map(rest => (
            <ul>
            {rest.restaurant_id}
            </ul>
        ));
    
    
        return (
            <div className="Search">
            <React.Fragment>
                <div className='App-body'>
                    <br/>
                    <h4 className='restaurant'>Recent Reviews</h4>
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </React.Fragment>  
            </div>
        )
    }

}

export default RecentReviews;