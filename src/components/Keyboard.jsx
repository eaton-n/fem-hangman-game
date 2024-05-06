import React, { useState } from 'react';

function Keyboard() {
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
		<div className='flex flex-row flex-wrap gap-2'>
			{letters.map(l => (
				<button className='p-3 aspect-square ' key={l}>
					{l}
				</button>
			))}
		</div>
	);
}

export default Keyboard;
