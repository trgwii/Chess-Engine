import { getCell, Board, Cell } from './Board';
import { Position } from './Position';

export const validatePiece = (requested: Cell, stored: Cell): boolean => {
	console.log(Object.values(requested || {}));
	console.log(Object.values(stored || {}));
	const requestedProperties = Object.values(requested || {});
	const storedProperties = Object.values(stored || {});
	return (
		requestedProperties.length === storedProperties.length &&
		requestedProperties.every(
			(value, index) => value === storedProperties[index]
		)
	);
};
export const validateMove = (position: Position, board: Board): boolean =>
	getCell(position, board) === undefined;
