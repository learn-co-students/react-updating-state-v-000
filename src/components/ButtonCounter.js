import React, { Component } from 'react';

class ButtonCounter extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }


    render() {
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }

}

export default ButtonCounter;