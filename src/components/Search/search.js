import React, { Component } from 'react';
import './search.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

const API = 'https://myassapi.herokuapp.com/';
const PART = 'restaurant';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            original: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        fetch(API + PART)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                filtered: data,
                original: data
            })
        }).catch(err => {
        });
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
    
    handleChange(e) {
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];
        
        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.state.filtered;
            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
          
                // change current item to lowercase
        const lc = item.name.toString().toLowerCase();
        console.log(lc);
                // change search term to lowercase
        const filter = e.target.value.toString().toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
            console.log(newList);
        return lc.includes(filter);
        

      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.state.original;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
    
    render() {
        return (
            <React.Fragment>
            <div className="Search">
            <h3>SEARCH RESTAURANTS</h3>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    <ul>
                        {this.state.filtered.map(item => (
                            <li key={item.restaurant_id}>
                                {item.name} &nbsp;
                            </li>
                        ))}
                    </ul>
                </div>
                </React.Fragment>
        )
    }
}

export default Search;