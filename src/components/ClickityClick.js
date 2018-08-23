// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }

  render() {
    return (
      <div>
        <p>
          I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
          <button onClick={this.handleClick}>Click me!</button>
        </p>
      </div>
    );
  }
}

export default ClickityClick;
