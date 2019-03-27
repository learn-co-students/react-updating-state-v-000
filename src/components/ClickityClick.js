// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    this.state = {
      hasBeenClicked: false,
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      },
    };
  }
 
  handleClick = () => {
    this.setState({
        hasBeenClicked: true,
        addressInfo: {
            ...this.state.addressInfo,
            city: 'New York City'
          }
    }, () => console.log(this.state.hasBeenClicked))
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;