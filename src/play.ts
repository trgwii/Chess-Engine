import { Move } from './primitives/Move';
import { getCell, setCell } from './primitives/Board';
import { initialBoard } from './primitives/initialBoard';
import { validatePiece } from './primitives/validators';
import { symbols } from './cli/strings';
import { showBoard } from './cli/showBoard';

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
		showBoard: () => console.log(showBoard(gameBoard))
	};
};
