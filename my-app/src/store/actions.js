export const setSquares = (nextSquares) => ({
	type: 'SET_SQUARES',
	payload: nextSquares,
});

export const setFirstPlayerIsNext = (firstPlayerIsNext) => ({
	type: 'SET_FIRST_PLAYER_IS_NEXT',
	payload: firstPlayerIsNext,
});

export const setIsWinEndGame = (isWinEndGame) => ({
	type: 'SET_IS_WIN_END_GAME',
	payload: isWinEndGame,
});

export const RESTART_GAME = () => ({
	type: 'RESTART_GAME',
});
