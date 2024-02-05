export const initialState = {
	firstPlayerIsNext: true,
	isWinEndGame: false,
	squares: Array(9).fill(null),
};

export const appReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_SQUARES': {
			return {
				...state,
				squares: payload,
			};
		}
		case 'SET_FIRST_PLAYER_IS_NEXT': {
			return {
				...state,
				firstPlayerIsNext: payload,
			};
		}
		case 'SET_IS_WIN_END_GAME': {
			return {
				...state,
				isWinEndGame: payload,
			};
		}
		case 'RESTART_GAME': {
			return initialState;
		}
		default:
			return state;
	}
};
