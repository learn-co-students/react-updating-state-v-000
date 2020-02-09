// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {

    constructor() {
        super();
        //define initial state
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        //update state here
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked)) // prints true because setState() has run before callback hits

        // console.log(this.state.hasBeenClicked); // prints false because setState() is batched (async)
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default ClickityClick;