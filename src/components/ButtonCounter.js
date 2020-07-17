import React, {Component} from 'react';

class ButtonCounter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    // Solution 1 for updating state:
    // let newCount = this.state.count + 1
    // this.setState({
    //   count: newCount
    // })

    // Solution 2 (React's built-in solution):
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  } // End of handleClick

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ButtonCounter;