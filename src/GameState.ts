import { Position, files, isFile, ranks, isRank } from './Position';
import type { Board, Piece } from './Board';

export const positionToCoords = (pos: Position): [number, number] => {
	const [file, rank] = pos.split('');
	if (!isFile(file) || !isRank(rank)) {
		throw new TypeError('Invalid position: ' + pos);
	}
	return [files.indexOf(file), ranks.indexOf(rank)];
};

export const getCell = (
	board: Board,
	position: Position
): Piece | undefined => {
	const [file, rank] = positionToCoords(position);
	return board[rank][file];
};

export interface GameState {
	board: Board;
}
