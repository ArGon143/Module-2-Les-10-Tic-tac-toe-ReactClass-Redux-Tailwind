import { Component } from 'react';
import { RESTART_GAME } from '../store/actions';
import { connect } from 'react-redux';

class RefreshGameContainer extends Component {
	goRefreshGame = () => {
		this.props.dispatch(RESTART_GAME());
	};

	render() {
		return (
			<button
				className="mt-5 px-4 py-2 rounded-xl border border-s-white shadow-1
				text-lg active:bg-white active:text-dark-blue
				hover:bg-white hover:bg-opacity-10"
				onClick={this.goRefreshGame}
			>
				Начать игру заново
			</button>
		);
	}
}

export const RefreshGame = connect()(RefreshGameContainer);
