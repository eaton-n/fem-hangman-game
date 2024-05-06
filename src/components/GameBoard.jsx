import React from 'react';

function GameBoard({ word }) {
	return (
		<div>
			{word.split('').map((l, i) => (
				<span key={i}>{l}</span>
			))}
		</div>
	);
}

export default GameBoard;
