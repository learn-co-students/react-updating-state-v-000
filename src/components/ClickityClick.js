// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }
 
  handleClick = () => {
    // Update our state here...
    if (this.state.hasBeenClicked === true) { 
      console.log("set to false");
      this.setState({
       hasBeenClicked: false
      }) 
    } else {
      console.log("set to true");
      this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked)) // Added callback function after setting the state.
    }
  }
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;