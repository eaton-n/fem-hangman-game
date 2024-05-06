import React from 'react';
import HealthBar from './HealthBar';

function HeaderGame({ headerText }) {
	return (
		<div className='flex flex-row justify-between items-center '>
			<button className='bg-pink-400 p-2 rounded-full'>
				<img className='w-8 h-8' src='/images/icon-menu.svg' alt='' />
			</button>
			<h2>{headerText}</h2>
			<HealthBar />
			<img className='w-8 h-8' src='/images/icon-heart.svg' alt='' />
		</div>
	);
}

export default HeaderGame;
