// Code ClickityClick Component Here
import React { Component } from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false
    };
  }

    handleClick = () => {
      this.setState({
        hasBeenClicked: true
      })
    }


    render() {
      return (
        <div>
          <p> I have {this.state.hasBeenClicked ? null : 'not'}  </p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
}

export default ClicketyClick;



//
// notes-
// -you define the initial state within the constructor, surprising
// -syntax/code to set the initial state; i would have thought it was to use setstate. but
// that's just for updating
// -in the index file, the syntax for importing component since it's in a different folder
