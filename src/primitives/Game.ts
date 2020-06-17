import { Board, getCell, positionToCoords, updateCell } from './Board';
import type { Side } from './Side';
import { Set, Piece, equals, oppositeSet } from './Piece';
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

export const pieceInPosition = (
	piece: Piece,
	position: Position,
	board: Board
): boolean => {
	const boardPiece = getCell(position, board);
	if (!boardPiece) {
		return false;
	}
	return equals(piece, boardPiece);
};

export const attackedPosition = (
	position: Position,
	attackedBy: Set,
	board: Board
): boolean => {
	position;
	attackedBy;
	board;
	// TODO: check if cell is being attacked by a piece
	// Can be implemented by seeing if any opponent piece has canMakeMove() -> true
	/// (with ignoreChecks = true)
	return false;
};

export const canMove = (
	move: Move,
	game: Game,
	ignoreChecks = false
): boolean => {
	const { piece, from, to } = move;
	if (piece.kind === 'K') {
		const [fromFile, fromRank] = positionToCoords(from);
		const [toFile, toRank] = positionToCoords(to);
		if (
			fromFile > toFile + 1 ||
			fromFile < toFile - 1 ||
			fromRank > toRank + 1 ||
			fromRank < toRank - 1
		) {
			// not a square the king can move to (further than one away)
			return false;
		}
		const toCell = game.board[toRank][toFile];
		if (toCell && toCell.set === piece.set) {
			// same color piece already on square
			return false;
		}
		if (ignoreChecks) {
			return true;
		}
		if (attackedPosition(from, oppositeSet(piece.set), game.board)) {
			// King cannot move into check
			return false;
		}
	}
	// TODO: Add logic for all pieces
	return false;
};

export const makeMove = (move: Move, game: Game): Game => ({
	...game,
	history: [...game.history, move],
	board: updateCell(
		move.to,
		move.piece,
		updateCell(move.from, undefined, game.board)
	)
});

export const move = (move: Move, game: Game): Game => {
	if (!pieceInPosition(move.piece, move.from, game.board)) {
		throw new Error('No piece at ' + move.from);
	}
	if (!canMove(move, game)) {
		throw new Error(
			move.piece.kind + ' at ' + move.from + ' cannot move to ' + move.to
		);
	}
	return makeMove(move, game);
};
export const availableMoves = (position: Position, game: Game): Move[] => {
	position;
	game;
	return [{ piece: { set: 'white', kind: 'P' }, from: 'e2', to: 'e4' }];
};
