import type { Side } from './Side';

export type Set = 'white' | 'black';

export type SetPiece<S extends Set> =
	| { set: S; kind: 'K' }
	| { set: S; kind: 'Q' }
	| { set: S; kind: 'R'; side: Side }
	| { set: S; kind: 'B' }
	| { set: S; kind: 'N' }
	| { set: S; kind: 'P' };

export type Piece = SetPiece<Set>;
