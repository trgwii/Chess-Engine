export type Sets = 'white' | 'black';

export type SetPiece<Set extends Sets> =
	| { set: Set; kind: 'K' }
	| { set: Set; kind: 'Q' }
	| { set: Set; kind: 'R' }
	| { set: Set; kind: 'B' }
	| { set: Set; kind: 'N' }
	| { set: Set; kind: 'P' };

export type Piece = SetPiece<Sets>;
