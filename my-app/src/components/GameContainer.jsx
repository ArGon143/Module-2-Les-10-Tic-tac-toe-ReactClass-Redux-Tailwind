import { RefreshGame } from './RefreshGame';
import { Board } from './BoardContainer';
import { Component } from 'react';

export class GameContainer extends Component {
	render() {
		return (
			<div className="text-center">
				<section className="bg-dark-blue min-h-screen flex flex-col justify-center items-center text-white text-calc">
					<Board />
					<RefreshGame />
				</section>
			</div>
		);
	}
}
