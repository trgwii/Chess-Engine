import { initialBoard } from './initialBoard';
import type { Game } from './Game';

/** Starting game state in a normal chess game */
export const initialGame: Game = {
	castling: {
		white: { K: true, Q: true },
		black: { K: true, Q: true }
	},
	passant: {},
	board: initialBoard,
	history: []
};
