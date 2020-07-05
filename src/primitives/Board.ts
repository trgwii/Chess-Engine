import { Position, files, isFile, ranks, isRank } from './Position';
import type { Piece } from './Piece';

/** A chess board cell (May contain a piece or be empty) */
export type Cell = Piece | undefined;

/** A chess board rank (aka horizontal row, classically numbered 1-8) */
export type Rank = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

/** An object representing a full chess board */
export type Board = [Rank, Rank, Rank, Rank, Rank, Rank, Rank, Rank];

/** Utility function to convert a chess-style position (e4) into a numeric representation */
export const positionToCoords = (pos: Position): [number, number] => {
	const [file, rank] = pos.split('');
	if (!isFile(file) || !isRank(rank)) {
		throw new TypeError('Invalid position: ' + pos);
	}
	return [files.indexOf(file), ranks.indexOf(rank)];
};

/** Possible coordinates */
export type coord = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/** Utility function to convert a numeric representation into a chess-style position (e4) */
export const coordsToPosition = (file: coord, rank: coord): Position =>
	(files[file] + ranks[rank]) as Position;

export const getCell = (
	position: Position,
	board: Board
): Piece | undefined => {
	const [file, rank] = positionToCoords(position);
	return board[rank][file];
};

export const updateCell = (
	position: Position,
	piece: Piece | undefined,
	board: Board
): Board => {
	const [file, rank] = positionToCoords(position);
	return [
		...board.slice(0, rank),
		[
			...board[rank].slice(0, file),
			piece,
			...board[rank].slice(file + 1)
		] as Rank,
		...board.slice(rank + 1)
	] as Board;
};

// TODO: move this logic into Game.ts -> move(), make pure
// Update: replacement candidate function updateCell()?
export const setCell = (
	from: Position,
	to: Position,
	board: Board
): undefined => {
	const [fileFrom, rankFrom] = positionToCoords(from);
	const [fileTo, rankTo] = positionToCoords(to);
	const fromCell = board[rankFrom][fileFrom];
	board[rankFrom][fileFrom] = undefined;
	board[rankTo][fileTo] = fromCell;
	return;
};
