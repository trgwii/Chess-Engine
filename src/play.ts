import { Move, stringifyMoves } from './primitives/Move';
import { getCell, setCell } from './primitives/Board';
import { initialBoard } from './primitives/initialBoard';
import { validatePiece, validateMove } from './primitives/validators';

export const play = () => {
    const gameBoard = initialBoard;
    
    return {
        move: (move: Move) => {
            const cellRequest = move.piece;
            console.log(cellRequest);
            console.log(getCell(move.from, gameBoard));
            const cellState = getCell(move.from, gameBoard);
            if(!validatePiece( cellRequest, cellState )) throw 'there is nothing to control';
            if(!validateMove(move.to, gameBoard)) throw 'invalid move';
            setCell(move.from, move.to, gameBoard);
            return move;
        },
        showBoard: () => gameBoard
    }
}