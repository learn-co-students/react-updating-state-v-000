import React from 'react'

export default class ClickityClick extends React.Component {
	constructor() {
		super();

	  	// Define the initial state:
	  	this.state = {
		  theme: 'blue',
		  hasBeenClicked: false,
		  addressInfo: {
		    street: 'First Street',
		    number: '123',
		    city: 'Boston',
		    country: 'USA'
		  },
		}
	}

	handleClick = () => {
		this.setState({
			hasBeenClicked: true,
			theme: 'red',
			// use object spread operator (...) to merge the
			// addressInfo object with the new data else
			// the object will be overwritten with the new data
			addressInfo: {
			  ...this.state.addressInfo,
    		  city: 'New York City'
			}
		  // State changes, however instant they might appear, happen asynchronously.
		  // If we want to access our new state after it has been updated, we can
		  // optionally add a callback as a second argument to the this.setState() function
		},() => console.log("I've been clicked?:", this.state.hasBeenClicked)) // prints true)

	}

	render() {
	    return (
	      <div>
	      	<h3>Theme: {this.state.theme}</h3>
	      	<p>Street: {this.state.addressInfo.street}</p>
	      	<p>Number: {this.state.addressInfo.number}</p>
	      	<p>City: {this.state.addressInfo.city}</p>
	      	<p>Country: {this.state.addressInfo.country}</p>
	        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
	        <button onClick={this.handleClick}>Click me!</button>
	      </div>
	    )
	}
}
