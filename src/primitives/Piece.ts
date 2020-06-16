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

export const symbols: {
	R: {
		white: string;
		black: string;
	};
	N: {
		white: string;
		black: string;
	};
	B: {
		white: string;
		black: string;
	};
	Q: {
		white: string;
		black: string;
	};
	K: {
		white: string;
		black: string;
	};
	P: {
		white: string;
		black: string;
	};
	none: {
		white: string;
		black: string;
	};
} = {
	R: {
		white: '♜',
		black: '♖'
	},
	N: {
		white: '♞',
		black: '♘'
	},
	B: {
		white: '♝',
		black: '♗'
	},
	Q: {
		white: '♛',
		black: '♕'
	},
	K: {
		white: '♚',
		black: '♔'
	},
	P: {
		white: '♟',
		black: '♙'
	},
	none: {
		white: ' ',
		black: ' '
	}
};
