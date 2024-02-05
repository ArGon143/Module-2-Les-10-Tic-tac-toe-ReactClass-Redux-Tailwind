import { connect } from 'react-redux';
import { setFirstPlayerIsNext, setIsWinEndGame, setSquares } from '../store/actions';
import { BoardLayout } from './BoardLayout';
import { Component } from 'react';

class BoardContainer extends Component {
	handleClick = (i) => {
		if (this.props.squares[i] || this.calculateWinner(this.props.squares)) {
			return;
		}

		const nextSquares = this.props.squares.slice();
		if (this.props.firstPlayerIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}

		this.props.dispatch(setSquares(nextSquares));
		this.props.dispatch(setFirstPlayerIsNext(!this.props.firstPlayerIsNext));
	};

	calculateWinner = (squares) => {
		const winCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winCombinations.length; i++) {
			const [a, b, c] = winCombinations[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				this.props.dispatch(setIsWinEndGame(true));

				return squares[a];
			}
		}

		return null;
	};

	render() {
		const winner = this.calculateWinner(this.props.squares);
		let status;

		if (winner) {
			status = `Игрок игравший "${winner}" победил`;
		} else {
			status = `Сейчас ход "${this.props.firstPlayerIsNext ? 'X' : 'O'}"`;
		}
		if (!winner && !this.props.squares.includes(null)) {
			status = `Ничья. "Сразитесь" еще раз!`;
		}

		return <BoardLayout handleClick={this.handleClick} status={status} />;
	}
}

const mapStateToProps = (state) => ({
	squares: state.squares,
	firstPlayerIsNext: state.firstPlayerIsNext,
});

export const Board = connect(mapStateToProps)(BoardContainer);
