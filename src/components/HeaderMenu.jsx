import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderMenu({ headerText }) {
	const navigate = useNavigate();
	return (
		<div className='flex flex-row justify-between items-center '>
			<button
				onClick={() => navigate('/')}
				className='h-16 w-16 bg-slate-600 bg-opacity-0 border-none'
			>
				<img src='/images/icon-back.svg' alt='' className='' />
			</button>
			<h2 className='text-2xl sm:text-4xl'>{headerText}</h2>
		</div>
	);
}

export default HeaderMenu;
