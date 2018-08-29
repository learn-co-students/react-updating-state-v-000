// Code ClickityClick Component Here
import React from 'react';

class  ClickityClick extends React.Component {
    constructor() {
        super();

        // Define initial state
        this.state = {
            hasBeenClicked: false,
        };
    }

    handleClick = () => {
        //update state here..
        this.setState({
            hasBeenClicked: true
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}
export default ClickityClick