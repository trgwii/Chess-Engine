import { play } from './play';
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
