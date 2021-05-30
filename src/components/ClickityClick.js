import React, { Component } from 'react'
class ClickityClick extends Component{
  constructor(){
    super();
    //define initial state
    this.state = {hasBeenClicked: false};
  }

  handleClick = () => {
    //update state here
    this.setState({hasBeenClicked: true}, () => {return console.log(this.state.hasBeenClicked); });


    
  }

  render(){
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )}
}

export default ClickityClick
