// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }

  // handleClick = () => {
  //   //update our state here
  //   this.setState({ hasBeenClicked: true });
  //   // State changes, dnt happen asynchronously.
  //   console.log(this.state.hasBeenClicked); // false after the states been updated
  // };

  // access our new state after it has been updated,
  // we can optionally add a callback as a second argument
  handleClick = () => {
    this.setState({
      hasBeenClicked: true },

      // second argument
      () => console.log(this.state.hasBeenClicked) // prints true
    )
  }
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not' } been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
