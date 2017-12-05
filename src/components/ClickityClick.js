// Code ClickityClick Component Here

import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super()

    //define the initial state
    this.state = {
      hasBeenClicked: false
    }
  }

  //To update our state,  use this.setState() and pass in the object
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick
