import type { Side } from './Side';

export type Set = 'white' | 'black';

export const oppositeSet = (set: Set): Set =>
	set === 'white' ? 'black' : 'white';

export type SetPiece<S extends Set> =
	| { set: S; kind: 'K' }
	| { set: S; kind: 'Q' }
	| { set: S; kind: 'R'; side: Side }
	| { set: S; kind: 'B' }
	| { set: S; kind: 'N' }
	| { set: S; kind: 'P' };

export type Piece = SetPiece<Set>;

export const equals = (a: Piece, b: Piece): boolean =>
	a.kind === b.kind &&
	a.set === b.set &&
	(a.kind === 'R' && b.kind === 'R' ? a.side === b.side : true);
