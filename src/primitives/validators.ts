import { Cell } from './Board';
export const validatePiece = (requested: Cell, stored: Cell): boolean => {
	const requestedProperties = Object.values(requested || {});
	const storedProperties = Object.values(stored || {});
	return (
		requestedProperties.length === storedProperties.length &&
		requestedProperties.every(
			(value, index) => value === storedProperties[index]
		)
	);
};
