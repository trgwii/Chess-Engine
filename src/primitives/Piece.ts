/** Possible sides ("K" and "Q") */
export type Side = 'K' | 'Q';

/** All possible sets ("white" and "black") */
export type Set = 'white' | 'black';

/** Returns the opposite set (black -\> white) */
export const oppositeSet = (set: Set): Set =>
	set === 'white' ? 'black' : 'white';

/** Piece for a given set (white / black) */
export type SetPiece<S extends Set> =
	| { set: S; kind: 'K' }
	| { set: S; kind: 'Q' }
	| { set: S; kind: 'R'; side: Side }
	| { set: S; kind: 'B' }
	| { set: S; kind: 'N' }
	| { set: S; kind: 'P' };

/** All possible pieces */
export type Piece = SetPiece<Set>;

/** Check if a piece is equal to another */
export const equals = (a: Piece, b: Piece): boolean =>
	a.kind === b.kind &&
	a.set === b.set &&
	(a.kind === 'R' && b.kind === 'R' ? a.side === b.side : true);
