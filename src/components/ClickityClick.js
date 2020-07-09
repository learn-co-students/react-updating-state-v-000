// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasBeenClicked: false,
			currentTheme: 'blue'
		};
	}

	handleClick = () => {
		this.setState(
			{
				hasBeenClicked: true
			},
			() => console.log('hi')
		);
	};

	render() {
		return (
			<div>
				<p>I have {this.state.hasBeenClicked ? null : 'not'} been Clicked!</p>
				<button onClick={this.handleClick}>Click Me!</button>
			</div>
		);
	}
}

export default ClickityClick;
