import React from 'react';

class AddressInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      },
    }

  }

  handleClick = () => {
    this.setState({
      addressInfo: {
        ...this.state.addressInfo, city: 'New York City',
      }
    })
    console.log(this.state.addressInfo)
  }

  render() {
    return (
      <div>
        <p>The name of the city is <span className='span'>{this.state.addressInfo.city}</span></p>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}

export default AddressInfo;
