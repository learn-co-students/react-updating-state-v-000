// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {

  constructor() {
    super();

    // Define the inital state:
    this.state = {
      hasBeenClick: false 
    };
  }

  handleClick = () => {
    // Update our state here
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
      
    })
   
  };

  render() {

    return(
      <div>
        <p>I have {this.state.toggled ? "" : 'NOT'} been clicked!</p>
        <button
          onClick={this.handleClick}
        >Click Me</button>
      </div>
    );
  }
}

export default ClickityClick
