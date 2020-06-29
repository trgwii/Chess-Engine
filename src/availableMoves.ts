import { showBoard } from './cli/showBoard';
import { availableMoves, move } from './primitives/Game';
import { initialGame } from './primitives/initialGame';

const game2 = move(
	{ from: 'a2', to: 'a3', piece: { set: 'white', kind: 'P' } },
	initialGame
);
const game3 = move(
	{ from: 'a7', to: 'a6', piece: { set: 'black', kind: 'P' } },
	game2
);
console.log(availableMoves(initialGame));
console.log(showBoard(initialGame.board));
console.log(availableMoves(game3));
console.log(showBoard(game3.board));
