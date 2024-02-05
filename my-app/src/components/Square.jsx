import { Component } from 'react';

export class Square extends Component {
	render() {
		return (
			<button
				className="bg-dark-blue border border-s-white text-6xl font-bold text-white
				text-center p-0 w-20 h-20 leading-10 -mt-1px -mr-1px float-left"
				onClick={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	}
}
