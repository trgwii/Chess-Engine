import { Board } from '../primitives/Board';
import { symbols } from './strings';
import { Set } from '../primitives/Piece';

/** Return a string suitable for displaying a board object in a text-based interface (like a terminal) */
export const showBoard = (board: Board, perspective: Set = 'white'): string => {
	return (
		'╭────────────────╮\n' +
		(perspective === 'white' ? [...board].reverse() : board)
			.map(
				(rank, i) =>
					'│' +
					(perspective === 'white' ? rank : [...rank].reverse())
						.map((cell, index) => {
							const color = (index + i) % 2 ? 'white' : 'black';
							return symbols[cell?.kind ?? 'none'][
								cell?.set ?? color
							];
						})
						.join(' ') +
					' │' +
					String(perspective === 'white' ? 8 - i : i + 1)
			)
			.join('\n') +
		'\n╰────────────────╯\n ' +
		(files => (perspective === 'white' ? files : [...files].reverse()))([
			'Ⓐ',
			'Ⓑ',
			'Ⓒ',
			'Ⓓ',
			'Ⓔ',
			'Ⓕ',
			'Ⓖ',
			'Ⓗ'
		]).join(' ')
	);
};
