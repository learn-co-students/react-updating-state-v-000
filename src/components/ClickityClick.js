// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.state = {
      hasBeenClicked: false,
    }
  }
  handleClick = () => {
    console.log("Hello~")
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }

  negateClick = () => {
    console.log("Bye~")
    this.setState({
      hasBeenClicked: false
    }, () => console.log(this.state.hasBeenClicked))
  }

  render() {
    return (
      <div>
        <p> I've {this.state.hasBeenClicked ? null : 'not' } been clicked! </p>
        <button onClick={this.handleClick}>Hello!</button>
        <br></br>
        <button onClick={this.negateClick}>Bye!</button>
      </div>
    )
  }
}
