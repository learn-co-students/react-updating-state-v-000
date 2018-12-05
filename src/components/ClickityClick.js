import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
    }
  }

  handleCLick = () => {
    this.setState({
      hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked))
  }

  render ()  {
    return(
      <div>
      <p>I have{this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      <button onClick={this.handleCLick}>Click Me!</button>
      </div>
    )
  }
}

export default ClickityClick;
