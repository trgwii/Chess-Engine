import { Board } from '../primitives/Board';
import { symbols } from './strings';
import { Set } from '../primitives/Piece';

export const showBoard = (board: Board, perspective: Set = 'white'): string => {
	return (
		(perspective === 'white' ? [...board].reverse() : board)
			.map(
				(rank, i) =>
					(perspective === 'white' ? rank : [...rank].reverse())
						.map(
							cell =>
								symbols[cell?.kind ?? 'none'][
									cell?.set ?? 'white'
								]
						)
						.join(' ') +
					'  ' +
					String(perspective === 'white' ? 8 - i : i + 1)
			)
			.join('\n') +
		'\n' +
		(files => (perspective === 'white' ? files : [...files].reverse()))([
			'ⓐ',
			'ⓑ',
			'ⓒ',
			'ⓓ',
			'ⓔ',
			'ⓕ',
			'ⓖ',
			'ⓗ'
		]).join(' ')
	);
};
