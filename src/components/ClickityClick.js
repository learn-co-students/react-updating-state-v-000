// Code ClickityClick Component
import React, { Component } from 'react'

class ClickityClick extends Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
    };
  }
  // If we want to access our new state after it has been updated,
  // we can optionally add a callback as a second argument to the this.setState() function.
  // This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state.
  handleClick = () => {
    // this.setState({hasBeenClicked: true})
    this.setState({hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked) ) //prints true
    console.log(this.state.hasBeenClicked); // prints false
  }

  render() {
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null: 'not'} been clicked!</p>
        <button onClick={this.handleClick} >Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;


// Changes in state and/or props will both trigger a re-render of our React component.
// However, changes in state can only happen internally due to components changing their own state.
// Thus, a component can trigger changes in its own state.
//
// A component cannot change its props. Changes in props can only happen externally,
// meaning the parent or grandparent component changes the values it passing down to its children.
