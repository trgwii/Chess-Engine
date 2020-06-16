import type { Board, Rank } from './Board';

export const emptyRank: Rank = [
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined
];

export const initialBoard: Board = [
	[
		{ set: 'white', kind: 'R', side: 'Q' },
		{ set: 'white', kind: 'N' },
		{ set: 'white', kind: 'B' },
		{ set: 'white', kind: 'Q' },
		{ set: 'white', kind: 'K' },
		{ set: 'white', kind: 'B' },
		{ set: 'white', kind: 'N' },
		{ set: 'white', kind: 'R', side: 'K' }
	],
	[
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' },
		{ set: 'white', kind: 'P' }
	],
	emptyRank,
	emptyRank,
	emptyRank,
	emptyRank,
	[
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' },
		{ set: 'black', kind: 'P' }
	],
	[
		{ set: 'black', kind: 'R', side: 'Q' },
		{ set: 'black', kind: 'N' },
		{ set: 'black', kind: 'B' },
		{ set: 'black', kind: 'Q' },
		{ set: 'black', kind: 'K' },
		{ set: 'black', kind: 'B' },
		{ set: 'black', kind: 'N' },
		{ set: 'black', kind: 'R', side: 'K' }
	]
];
