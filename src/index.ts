import { startingPosition } from './startingPosition';
import { getCell } from './GameState';
import type { Position } from './Position';

const checkCell = (cell: Position) =>
	console.log(cell, getCell(startingPosition, cell));

checkCell('d1');
checkCell('d8');
