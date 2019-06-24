import React, { Component } from 'react';

export default class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    };
  }


//State changes, however instant they might appear, happen asynchronously. If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state. In code:

  handleClick = () => {
    this.setState(
      {hasBeenClicked: true},
      () => console.log(this.state.hasBeenClicked)
    )
    console.log(this.state.hasBeenClicked);
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
