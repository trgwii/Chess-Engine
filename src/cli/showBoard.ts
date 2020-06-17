import { Board } from '../primitives/Board';
import { symbols } from './strings';

export const showBoard = (board: Board): string => {
	return (
		[...board]
			.reverse()
			.map(
				(rank, i) =>
					rank
						.map(
							cell =>
								symbols[cell?.kind ?? 'none'][
									cell?.set ?? 'white'
								]
						)
						.join(' ') +
					'  ' +
					String(8 - i)
			)
			.join('\n') + '\nⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ'
	);
};
