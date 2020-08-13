// Code ClickityClick Component Here
import React, { Component } from 'react'


export default class ClickityClick extends Component {

   constructor(){
     super()
     this.state = {
       hasBeenClicked: false
     };
   }

//why does it need to be written as ES6 and have the empty parenthesis - can we rewrite on one line?
   handleClick = () => {
     this.setState(previousState => {
       return {
         hasBeenClicked: !previousState.hasBeenClicked
       }
     }

     )
   }


    render() {
        return (
            <div>
              <p>{this.state.hasBeenClicked ? "ON!" : "OFF!" } </p>
              <button onClick={this.handleClick}>ON/OFF</button>
            </div>
        )
    }
}
