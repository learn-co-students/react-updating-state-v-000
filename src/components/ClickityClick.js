
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      }
    };
  }


  handleClick = () => {
    // this.setState({
    //   hasBeenClicked: true
    // })


    // this.setState({
    //   addressInfo: Object.assign({}, this.state.addressInfo,
    //   {
    //     city: 'NYC'
    //   })
    // })

    this.setState({
      hasBeenClicked: true,
      addressInfo: {
        ...this.state.addressInfo,
        city: 'Myrtle Beach'
      }
    }, () => console.log("new state", this.state))

  }


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
