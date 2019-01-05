// Code ClickityClick Component Here

import React, { Component } from 'react';

class ClickityClick extends React.Component {

  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      clickCount: 0
    };

  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
      clickCount: this.state.clickCount + 1,
    }, () => console.log(this.state.hasBeenClicked)
  )};

  render() {
    return (
      <div>
        <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked {this.state.clickCount > 0 ? this.state.clickCount + " time(s)" : null}! </p>
        <button onClick={this.handleClick}> Click me! </button>
      </div>
    );
  }

}

export default ClickityClick;
