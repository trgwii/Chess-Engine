import { showBoard } from './cli/showBoard';
import { initialBoard } from './primitives/initialBoard';
import { availableMoves } from './primitives/Game';
import { initialGame } from './primitives/initialGame';

console.log(availableMoves(initialGame));
console.log(showBoard(initialBoard));
