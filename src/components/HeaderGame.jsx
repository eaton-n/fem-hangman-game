import React, { useRef, useState } from 'react';
import HealthBar from './HealthBar';

function HeaderGame({ headerText, setOpenModal, barWidth, setGameState }) {
	return (
		<div className='flex flex-row px-2 justify-between w-full items-center relative'>
			<button
				className='bg-pink-400 p-2 rounded-full border-none'
				onClick={() => {
					setOpenModal(true);
					setGameState('PAUSED');
				}}
			>
				<img className='w-8 h-8' src='/images/icon-menu.svg' alt='' />
			</button>
			<h2>{headerText}</h2>
			<HealthBar barWidth={barWidth} />
			<img className='w-8 h-8' src='/images/icon-heart.svg' alt='' />
		</div>
	);
}

export default HeaderGame;
