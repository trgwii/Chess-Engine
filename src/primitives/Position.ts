export type APosition = 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8';
export type BPosition = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8';
export type CPosition = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c8';
export type DPosition = 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6' | 'd7' | 'd8';
export type EPosition = 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6' | 'e7' | 'e8';
export type FPosition = 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8';
export type GPosition = 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6' | 'g7' | 'g8';
export type HPosition = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';

export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
/** Utility function for determining if a string is a valid chess file (a-h) */
export const isFile = (x: string): x is File => files.includes(x);

export type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
/** Utility function for determining if a string is a valid chess rank (1-8) */
export const isRank = (x: string): x is Rank => ranks.includes(x);

export const positions = files.flatMap(file =>
	ranks.flatMap(rank => (file + rank) as Position)
);

export type Position =
	| APosition
	| BPosition
	| CPosition
	| DPosition
	| EPosition
	| FPosition
	| GPosition
	| HPosition;

/** Utility function for determining if a string is a valid chess position of the form "e4" */
export const isPosition = (x: string): x is Position =>
	x.length === 2 && isFile(x[0]) && isRank(x[1]);
