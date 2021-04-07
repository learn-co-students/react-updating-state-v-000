// Code ClickityClick Component Here
import React, {Component} from "react"
export default class ClickityClick extends Component {
  constructor() {
    super()
    this.state = {
      theme: 'blue',
      timer: 0,
      addressInfo: {
        street: null,
        number: null,
        city: 'New York City',
        country: null
      }
    }
  }

  render() {
    return(<button onClick={()=>{this.yes(); this.setState({addressInfo: {...this.state.addressInfo, street: "In the middle of the house"}})}}>{JSON.stringify(this.state)}</button>)
  }

  yes = ()=> {
    this.setState(prevState=> ({timer: prevState.timer + 1}) )

  }

}