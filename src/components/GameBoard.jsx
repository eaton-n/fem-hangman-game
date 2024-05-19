import React from 'react';

function GameBoard({ word, guesses }) {
	const splitWord = word.split(' ');
	const board = splitWord.map((w, i) => {
		return (
			<div key={i} className='flex items-center justify-center gap-2'>
				{w.split('').map((l, i) => {
					return (
						<span
							className='text-center h-8 w-5 sm:h-12 sm:w-8 lg:h-16 lg:w-10 text-3xl p-1 bg-white bg-opacity-10'
							key={i}
						>
							{guesses.includes(l) ? l : ''}
						</span>
					);
				})}
			</div>
		);
	});

	return (
		<div className='py-4 flex flex-wrap gap-4 items-center text-md justify-center w-full h-32 sm:h-48 md:h:64'>
			{board}
		</div>
	);
}

export default GameBoard;
