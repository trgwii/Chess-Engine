import { initialBoard } from './primitives/initialBoard';
import { getCell } from './primitives/Board';
import type { Position } from './primitives/Position';
import { Piece } from './primitives/Piece';
import { Move, stringifyMoves } from './primitives/Move';
import { play } from './play';
import { showBoard } from './cli/showBoard';
import { move } from './primitives/Game';
import { initialGame } from './primitives/initialGame';

export const last = <T>(list: T[]): T => list[list.length - 1];

const showMove = (move: Move) =>
	`${move.piece.set} moved ${move.piece.kind} to ${move.to}`;

const checkCell = (cell: Position) =>
	console.log(cell, '->', getCell(cell, initialBoard));

checkCell('d1');
checkCell('d8');

export const p: Piece = { set: 'white', kind: 'Q' };

export const whiteMove: Move = {
	piece: { set: 'white', kind: 'P' },
	from: 'e2',
	to: 'e4'
};

export const blackMove: Move = {
	piece: { set: 'black', kind: 'P' },
	from: 'e7',
	to: 'e5'
};

export const whiteMove2: Move = {
	piece: { set: 'white', kind: 'N' },
	from: 'g1',
	to: 'f3'
};

export const history = [whiteMove, blackMove, whiteMove2];

console.log(stringifyMoves(history).join('\n'));

console.log(showBoard(initialGame.board) + '\n');
const game2 = move(whiteMove, initialGame);

console.log(showMove(last(game2.history)));
console.log(showBoard(game2.board) + '\n');
const game3 = move(blackMove, game2);

console.log(showMove(last(game3.history)));
console.log(showBoard(game3.board) + '\n');
const game4 = move(whiteMove2, game3);

console.log(showMove(last(game4.history)));
console.log(showBoard(game4.board) + '\n');

export const newGame = play();

newGame.move({
	piece: { set: 'white', kind: 'P' },
	from: 'e2',
	to: 'e4'
});

console.log(newGame.showBoard());

newGame.move({
	piece: { set: 'black', kind: 'P' },
	from: 'e7',
	to: 'e5'
});

console.log(newGame.showBoard());

newGame.move({
	piece: { set: 'white', kind: 'N' },
	from: 'g1',
	to: 'f3'
});

console.log(newGame.showBoard());
