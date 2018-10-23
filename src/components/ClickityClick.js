// Code ClickityClick Component Here
import React from 'react'
export default class ClickityClick extends React.Component {
  constructor(){
    super()

    this.state = {
      hasBeenClicked: false
    }
  }
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    },  () => console.log(this.state.hasBeenCliked))
  
  render(){
    return(
      <p>I have {this.state.hasBeenCliked} ? null : 'not' been clicked!</p>
      <button onClick={this.handleClick}>Click me!</button>
      
    )
  }
}
