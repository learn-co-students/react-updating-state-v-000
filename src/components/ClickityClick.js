// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
// The super keyword is used to call functions on an object's parent.
  // constructor (intializer) kicks in moment browser loads
  constructor() {
    super();

    //Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
      hasBeenClicked: true
    }, () => console.log('callback:', this.state.hasBeenClicked)) //prints true
    console.log(this.state.hasBeenClicked); // prints false
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not' } been clicked!</p>
        <button onClick={this.handleClick}> Click me! </button>
      </div>
    );
  }
}

export default ClickityClick;
