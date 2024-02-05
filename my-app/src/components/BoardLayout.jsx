import { Component } from 'react';
import { Square } from './Square';
import { connect } from 'react-redux';

class BoardLayoutContainer extends Component {
	render() {
		return (
			<>
				<div className="mb-3">{this.props.status}</div>
				<div
					className={
						this.props.isWinEndGame
							? 'bg-green shadow-1 rounded-xl p-4 border-s-white border-2'
							: 'shadow-1 rounded-xl p-4 border-s-white border-2'
					}
				>
					<div>
						<Square
							value={this.props.squares[0]}
							onClick={() => this.props.handleClick(0)}
						/>
						<Square
							value={this.props.squares[1]}
							onClick={() => this.props.handleClick(1)}
						/>
						<Square
							value={this.props.squares[2]}
							onClick={() => this.props.handleClick(2)}
						/>
					</div>
					<div>
						<Square
							value={this.props.squares[3]}
							onClick={() => this.props.handleClick(3)}
						/>
						<Square
							value={this.props.squares[4]}
							onClick={() => this.props.handleClick(4)}
						/>
						<Square
							value={this.props.squares[5]}
							onClick={() => this.props.handleClick(5)}
						/>
					</div>
					<div>
						<Square
							value={this.props.squares[6]}
							onClick={() => this.props.handleClick(6)}
						/>
						<Square
							value={this.props.squares[7]}
							onClick={() => this.props.handleClick(7)}
						/>
						<Square
							value={this.props.squares[8]}
							onClick={() => this.props.handleClick(8)}
						/>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	squares: state.squares,
	isWinEndGame: state.isWinEndGame,
});

export const BoardLayout = connect(mapStateToProps)(BoardLayoutContainer);
