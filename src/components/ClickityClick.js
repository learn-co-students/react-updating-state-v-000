// Code ClickityClick Component Here

import React from 'react'; 

export default class ClickityClick extends React.Component {

    constructor() {
        super();

    // Initial state
        this.state = {
            hasBeenClicked: false
        };
    }
    
    handleClick = () => {
        // update state by overriding
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }

    // if we want to merge a state update in a nested attribute
    // ex: we have
    // addressInfo: {
    //     street: null,
    //     number: null,
    //     city: null,
    //     country: null 

    // we need to do:
    // this.setState({
    //     addressInfo: {
    //      ...this.state.addressInfo,
    //       city: 'New York City'
    //     })
    //   });


    render() {
        return(
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick= {this.handleClick}>Click me!</button>
             </div>   
        );
    }

}