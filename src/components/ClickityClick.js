// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        // Define the initial state:
        // always put this within #constructor
        this.state = {
            hasBeenClicked: false
            // create a function hasBeenClicked
        };
    }

    // We use an arrow function because an arrow function prevents 'this' bugs.
    // This means, the arrow function doesn't redefine the value of 'this' within their
    // function body.
    handleClick = () => {
        // if we do not use an arrow function here, the value of 'this', (assuming
        // we do not use call, apply, or bind) will be null.
        this.setState({
            // Here, we'll update the state
            hasBeenClicked: true
        }, () =>
        console.log(this.state.hasBeenClicked))
        // State changes happen asynchronously, thus the requirement of a 
        // callback.
    };

    render() {
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        );
    }
}

export default ClickityClick;