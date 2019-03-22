import React, { Component } from 'react';
import './search.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Button } from 'react-bootstrap';

const API = 'https://myassapi.herokuapp.com/';
const PART = 'user';

class Search extends React.Component {
    
    constructor(props) {
        super(props);
        this.newState = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }


    token = null;
    state = {
        query: "",
        allUsers: [],
        users:[],
    };
    
    
    handleChange(e) {
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.props.items;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.toString().toLowerCase();
                // change search term to lowercase
        const filter = e.target.value.toString().toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  } 



    

    //handleChange = this.handleChange.bind(this);

    componentDidMount() {
        fetch(API + PART)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                allUsers: data,
                users: data,
                filtered: data
            })
        }).catch(err => {
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allUsers: nextProps,
            filtered: nextProps.items
        });
    }


 render() {

    
    const cards = this.state.allUsers.map(rest => (
        <span>{rest.username} </span>    
    ));

    const cards2 = this.newState.filtered.map(rest => (
        <li key={rest.user_id}>{rest.username} </li>    
    ));

    //const cardsFind = cards.find(k => k =='Ralf');
    

    return (
        <div className="Search">
        <React.Fragment>
            <div className='App-body'>
            <hr/>
                <h4 className='user'>All users</h4>
                <div>{cards}</div>
                <hr/>
            </div>
        </React.Fragment>

        <React.Fragment>
            <form>
                <h3>SEARCH</h3>
                <input onChange={this.handleChange} type="text" className="search-box" placeholder="Search for..."/>
                <br/>
                <div>{cards2}</div>
                
            </form>
        </React.Fragment>
        
        </div>
        
    )
}

}
   
   export default Search;