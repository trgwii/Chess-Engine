import type { Piece } from './Piece';
import type { Position } from './Position';

export type Move = {
	piece: Piece;
	from: Position;
	to: Position;
};

export const stringifyMove = (move: Move): string =>
	(move.piece.kind === 'P' ? '' : move.piece.kind) + move.to;

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
