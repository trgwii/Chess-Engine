import { Position, files, isFile, ranks, isRank } from './Position';
import type { Piece } from './Piece';

export type Cell = Piece | undefined;

export type Rank = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type Board = [Rank, Rank, Rank, Rank, Rank, Rank, Rank, Rank];

export const positionToCoords = (pos: Position): [number, number] => {
	const [file, rank] = pos.split('');
	if (!isFile(file) || !isRank(rank)) {
		throw new TypeError('Invalid position: ' + pos);
	}
	return [files.indexOf(file), ranks.indexOf(rank)];
};

export const getCell = (
	position: Position,
	board: Board
): Piece | undefined => {
	const [file, rank] = positionToCoords(position);
	return board[rank][file];
};

export const setCell = (
	from: Position,
	to: Position,
	board: Board
): undefined => {
	const [fileFrom, rankFrom] = positionToCoords(from);
	const [fileTo, rankTo] = positionToCoords(to);
	const fromCell = board[rankFrom][fileFrom];
	board[rankFrom][fileFrom] = board[rankTo][fileTo];
	board[rankTo][fileTo] = fromCell;
	return;
};
