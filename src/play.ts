import { Move } from './primitives/Move';
import { getCell, setCell } from './primitives/Board';
import { initialBoard } from './primitives/initialBoard';
import { validatePiece } from './primitives/validators';
import { symbols } from './cli/strings';

// TODO: make use of Game
export const play = (): {
	move: (move: Move) => Move;
	showBoard: () => void;
} => {
	const gameBoard = initialBoard;

	return {
		move: (move: Move) => {
			const cellRequest = move.piece;
			const cellState = getCell(move.from, gameBoard);
			if (!validatePiece(cellRequest, cellState))
				throw 'there is nothing to control';
			setCell(move.from, move.to, gameBoard);
			return move;
		},
		showBoard: () => {
			let boardPrint = '';
			for (const rank of gameBoard) {
				for (const file of rank) {
					const symbolSets = symbols[(file || { kind: 'none' }).kind];
					boardPrint += ` ${
						symbolSets[(file || { set: 'white' }).set]
					} `;
				}
				boardPrint += '\n';
			}
			console.log('%c' + boardPrint, 'font-size: 16pt');
		}
	};
};
