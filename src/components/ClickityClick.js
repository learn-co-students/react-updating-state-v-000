import React from 'react'

class ClickityClick extends React.Component {
  constructor(){
    super();
    this.state = {
      hasBeenClicked: false
    };
  }
  handleClick = () => {
    this.setState({hasBeenClicked: true}); //WHY DOES IT HAVE TO BE ARROW FUNCTION?
  } // the event handler is a CALLBACK 

  //
  // handleClick(){
  //   this.setState({hasBeenClicked: true});
  //   // this is undefined...?
  // }

  render(){
    debugger;
    return(
      <div>
        <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>

        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
