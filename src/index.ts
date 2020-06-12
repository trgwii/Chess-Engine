import { startingPosition } from './primitives/startingPosition';
import { getCell } from './primitives/Board';
import type { Position } from './primitives/Position';
import { Piece } from './primitives/Piece';

const checkCell = (cell: Position) =>
	console.log(cell, getCell(cell, startingPosition));

checkCell('d1');
checkCell('d8');

export const p: Piece = { set: 'white', kind: 'Q' };
