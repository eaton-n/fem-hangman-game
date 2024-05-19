import React, { useState } from 'react';

function Keyboard({ guesses, handleGuess }) {
	const [letters, setLetters] = useState([
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]);
	return (
		<div className=' flex flex-row flex-wrap gap-1 sm:gap-2 px-2 max-w-sm lg:max-w-3xl justify-center items-center'>
			{letters.map(l => (
				<button
					disabled={guesses.includes(l)}
					className='p-2 rounded-sm sm:w-12 lg:w-24 sm:text-xl md:text-2xl border-none'
					key={l}
					onClick={() => handleGuess(l)}
				>
					<span className='font-sans text-2xl'>{l}</span>
				</button>
			))}
		</div>
	);
}

export default Keyboard;
