import React from 'react';
import './RestaurantCards.css';
import {Router} from 'react-router-dom';

const RestaurantCards = (restaurant) =>{ 
    return(
        <div className = "col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{restaurant.name}</h4>
                    <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="map"
                            width="270"
                            height="270"
                            id="gmap_canvas"
                            src={"https://maps.google.com/maps?q=" + restaurant.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0">
                        </iframe>
                    </div>
                    </div>
                    <Router to = {{pathname: '/restaurant/' + restaurant.id}} className="btn btn-primary">Check</Router>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCards;