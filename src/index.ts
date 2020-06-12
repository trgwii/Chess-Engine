import { startingPosition } from './primitives/startingPosition';
import { getCell } from './primitives/Board';
import type { Position } from './primitives/Position';

const checkCell = (cell: Position) =>
	console.log(cell, getCell(startingPosition, cell));

checkCell('d1');
checkCell('d8');
