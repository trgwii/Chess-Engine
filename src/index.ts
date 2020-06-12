import { initialBoard } from './primitives/initialBoard';
import { getCell } from './primitives/Board';
import type { Position } from './primitives/Position';
import { Piece } from './primitives/Piece';
import { Move, stringifyMoves } from './primitives/Move';

const checkCell = (cell: Position) =>
	console.log(cell, '->', getCell(cell, initialBoard));

checkCell('d1');
checkCell('d8');

export const p: Piece = { set: 'white', kind: 'Q' };

export const whiteMove: Move = {
	piece: { set: 'white', kind: 'P' },
	from: 'e2',
	to: 'e4'
};

export const blackMove: Move = {
	piece: { set: 'black', kind: 'P' },
	from: 'e7',
	to: 'e5'
};

export const whiteMove2: Move = {
	piece: { set: 'white', kind: 'N' },
	from: 'g1',
	to: 'f3'
};

export const history = [whiteMove, blackMove, whiteMove2];

console.log(stringifyMoves(history).join('\n'));
