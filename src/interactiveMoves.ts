import { createInterface } from 'readline';

import { initialGame } from './primitives/initialGame';
import { showBoard } from './cli/showBoard';
import { move } from './primitives/Game';
import { getCell } from './primitives/Board';
import { isPosition } from './primitives/Position';
import { Move } from './primitives/Move';

export const last = <T>(list: T[]): T => list[list.length - 1];

export const showMove = (move: Move): string =>
	`${move.piece.set} moved ${move.piece.kind} to ${move.to}`;

void (async () => {
	const rl = createInterface(process.stdin);
	let game = initialGame;
	for await (const line of rl) {
		if (line === 'board') {
			console.log(showBoard(game.board) + '\n');
			continue;
		}
		const [from, to] = line.split(':');
		if (!isPosition(from)) {
			console.error('Invalid from position: ' + from);
			continue;
		}
		if (!isPosition(to)) {
			console.error('Invalid to position: ' + to);
			continue;
		}
		const piece = getCell(from, game.board);
		if (!piece) {
			console.error('No piece to move at ' + from);
			continue;
		}
		const Move = { piece, from, to };
		try {
			game = move(Move, game);
		} catch (err) {
			console.error((err as Error).message);
			continue;
		}
		console.log(showMove(Move));
	}
})();
