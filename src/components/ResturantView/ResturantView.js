import React from 'react';
import './ResturantView.css';

const RestaurantView = ({id, name, address, category, description}) => {
    return (
        <div className="RestaurantView">
            <p> id: {id}</p>
            <p>{name}</p>
            <p>{address}</p>
            <p>{category}</p>
            <p>{description}</p>
        </div>
    );
}
 
export default RestaurantView;