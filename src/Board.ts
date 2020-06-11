export type Sets = 'white' | 'black';

export type SetPiece<Set extends Sets> =
	| { set: Set; kind: 'K' }
	| { set: Set; kind: 'Q' }
	| { set: Set; kind: 'R' }
	| { set: Set; kind: 'B' }
	| { set: Set; kind: 'N' }
	| { set: Set; kind: 'P' };

export type Piece = SetPiece<'white'> | SetPiece<'black'>;

export type Cell = Piece | undefined;

export type Rank = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type Board = [Rank, Rank, Rank, Rank, Rank, Rank, Rank, Rank];
