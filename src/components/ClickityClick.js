import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super()

    //define initial state
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    }
  }

  //update state here
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
    //to access new state after it's update, optionally add callback as 2nd arg to this.setState()
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
