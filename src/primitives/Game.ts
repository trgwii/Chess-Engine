import {
	Board,
	getCell,
	positionToCoords,
	updateCell,
	coord,
	coordsToPosition
} from './Board';
import { Side, Set, Piece, equals, oppositeSet } from './Piece';
import { Position, positions } from './Position';
import { Move } from './Move';
import { last } from '../utils';

/** Object representing the entire game state for a chess game in any state */
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

/** Utility function for determining if a piece is in a given position on a board */
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

/** Utility function for determining if a position is being attacked by an enemy piece */
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

/** Utility function for determining if a specific move can be legally made on a chess board */
export const canMove = (
	move: Move,
	game: Game,
	ignoreChecks = false
): boolean => {
	const turn = oppositeSet(last(game.history)?.piece.set ?? 'black');
	if (move.piece.set !== turn) {
		return false;
	}
	const { piece, from, to } = move;
	const [fromFile, fromRank] = positionToCoords(from);
	const [toFile, toRank] = positionToCoords(to);
	if (piece.kind === 'K') {
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
	if (piece.kind === 'P') {
		// TODO: Add more logic
		if (piece.set === 'white' ? fromRank > toRank : fromRank < toRank) {
			// Pawn can only move forwards
			return false;
		}
		if (
			fromFile !== toFile &&
			game.board[toRank][toFile]?.set !== oppositeSet(piece.set) &&
			game.passant[oppositeSet(piece.set)] !== to
		) {
			// Pawn can't move diagonally if there is no capture of opposite piece and a passant move was not played previously
			// TODO: set passant from here when there is a passant move, need to modify return signature of this function
			// passant coordinate should be set to the coordinate passed by a pawn moving 2 spaces (if e2 -> e4, then passant should be set to e3)
			// passant should always be unset when any move that isn't a pawn double move happens
			return false;
		}
		if (
			piece.set === 'white'
				? fromRank + 2 < toRank
				: fromRank - 2 > toRank
		) {
			// Piece can't move more than 2 spaces in any case
			return false;
		}
		if (
			piece.set === 'white'
				? fromRank + 1 < toRank
				: fromRank - 1 > toRank
		) {
			// Pawn can't move two spaces unless it is at starting position
			// ranks are 0-indexed
			if (piece.set === 'white' && fromRank !== 1) {
				return false;
			}
			if (piece.set === 'black' && fromRank !== 6) {
				return false;
			}
		}
		return true;
	}
	if (piece.kind === 'N') {
		// TODO: Add logic
		return true;
	}
	// TODO: Add logic for all pieces
	return false;
};

/** Utility function for updating piece positions and appending to game history in a game state when making a move */
export const makeMove = (move: Move, game: Game): Game => ({
	...game,
	history: [...game.history, move],
	board: updateCell(
		move.to,
		move.piece,
		updateCell(move.from, undefined, game.board)
	)
});

/** Check if a move is legal and apply it to a game state */
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

/** Utility function for listing possible moves for a specific position in a given game state */
export const availableMovesFor = (position: Position, game: Game): Move[] => {
	const piece = getCell(position, game.board);
	if (!piece) {
		return [];
	}
	return positions.flatMap(next => {
		if (next === position) {
			return [];
		}
		const move: Move = { from: position, to: next, piece };
		return canMove({ from: position, to: next, piece }, game) ? [move] : [];
	});
};

/** Utility function for listing all possible moves in a given game state */
// TODO: implement availableMoves
export const availableMoves = (game: Game): Move[] => {
	const turn = oppositeSet(last(game.history)?.piece.set ?? 'black');
	return game.board
		.flatMap((rank, f) =>
			rank.flatMap((cell, r) =>
				cell?.set === turn
					? [coordsToPosition(f as coord, r as coord)]
					: []
			)
		)
		.flatMap(position => availableMovesFor(position, game));
};
