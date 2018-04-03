// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    this.setState({hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked)) // Returns true
    // console.log(this.state.hasBeenClicked); Returns false
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Clicke Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
