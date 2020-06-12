import type { Board } from './Board';
import type { Sets } from './Piece';
import { Position } from './Position';

export interface GameState {
	turn: Sets;
	castling: {
		[k in Sets]: { K: boolean; Q: boolean };
	};
	passant: {
		[k in Sets]: Position;
	};
	board: Board;
}
