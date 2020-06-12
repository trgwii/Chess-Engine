import type { Board } from './Board';
import type { Side } from './Side';
import type { Set } from './Piece';
import { Position } from './Position';
import { Move } from './Move';

export interface Game {
	castling: {
		[k in Set]: { [k in Side]: boolean };
	};
	passant: {
		[k in Set]?: Position;
	};
	board: Board;
	history: Move[];
}

export const move = (move: Move, game: Game): Game => {
	return game;
};
export const availableMoves = (position: Position, game: Game): Move[] => {
	position;
	game;
	return [{ piece: { set: 'white', kind: 'P' }, from: 'e2', to: 'e4' }];
};
