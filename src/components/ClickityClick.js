import React from 'react';
 
export default class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
      //using a callback to ensure the state has been updated when you go to use it
    this.setState({
        hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked))
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}