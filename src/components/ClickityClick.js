import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        //Define the initial state:
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
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
         hasBeenClicked: true
       })
     }

    render () {
        return (
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
        </div>
        )};
}

export default ClickityClick;

//how to deep merge - two ways

// use object assign
this.setState({
  addressInfo: Object.assign({}, this.state.addressInfo, {
    city: 'New York City',
  }),
});

// or recommended way
this.setState({
  addressInfo: {
    ...this.state.addressInfo,
    city: 'New York City',
  },
});

//setting state is asynchronus so...
handleClick = () => {
  this.setState({
    hasBeenClicked: true
  })
  console.log(this.state.hasBeenClicked); // prints false
}

//but this...
handleClick = () => {
  this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked)) // prints true
}


