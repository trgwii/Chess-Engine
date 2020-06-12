import type { Board } from './Board';
import type { Side } from './Side';
import type { Set } from './Piece';
import { Position } from './Position';
import { Move } from './Move';

export interface Game {
	turn: Set;
	castling: {
		[k in Set]: { [k in Side]: boolean };
	};
	passant: {
		[k in Set]?: Position;
	};
	board: Board;
	history: Move[];
}
