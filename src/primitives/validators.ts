import { getCell, Board } from './Board';
import { Position } from './Position';

export const validatePiece = (requested: Object, stored: Object) => JSON.stringify(requested) === JSON.stringify(stored);
export const validateMove = (position: Position, board: Board) => JSON.stringify(getCell(position, board)) === JSON.stringify({});