import React, { Component } from 'react';

class ClickityClick extends Component {
  state = {
    hasBeenClicked: false,
  };

  handleClick = () => {
    this.setState({ hasBeenClicked: !this.state.hasBeenClicked });
  };

  render() {
    const { hasBeenClicked } = this.state;
    return (
      <div>
        <p>I have {hasBeenClicked ? '' : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
