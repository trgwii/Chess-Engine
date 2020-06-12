import { initialBoard } from './initialBoard';
import type { Game } from './Game';

export const initialGame: Game = {
	turn: 'white',
	castling: {
		white: { K: true, Q: true },
		black: { K: true, Q: true }
	},
	passant: {},
	board: initialBoard,
	history: []
};
