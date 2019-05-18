// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
  constructor(){
    super()
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: 'Chicago',
        country: null
      },

    }
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
      currentTheme: 'blue',
      addressInfo: {
        ...this.state.addressInfo,
        city: 'New York City'
      }
    }, () => console.log(this.state.hasBeenClicked))
  }

  render (){
    return(
      <div>
        <p>>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <p> City of {this.state.addressInfo.city} </p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default ClickityClick
