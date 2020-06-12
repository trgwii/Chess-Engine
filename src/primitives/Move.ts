import type { Set } from './Piece';
import type { Position } from './Position';

export type Move = {
	set: Set;
	from: Position;
	to: Position;
};
