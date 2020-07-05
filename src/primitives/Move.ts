import type { Piece } from './Piece';
import type { Position } from './Position';

export type Move = {
	piece: Piece;
	from: Position;
	to: Position;
};

/** Utility function to return a simple chess notation string representing a single piece move */
export const stringifyMove = (move: Move): string =>
	(move.piece.kind === 'P' ? '' : move.piece.kind) + move.to;

/** Utility function to return an array of strings representing a series of chess moves */
export const stringifyMoves = (moves: Move[]): string[] =>
	moves.flatMap((move, i, moves) => {
		const j = i + 1;
		const next: Move | undefined = moves[j];
		if (i % 2 === 1 || (!next && moves.length % 2 === 0)) {
			return [];
		}
		const pair =
			stringifyMove(move) + (next ? ' ' + stringifyMove(next) : '');
		return [String(j) + '. ' + pair];
	});
