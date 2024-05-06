import React from 'react';

function HeaderMenu({ headerText }) {
	return (
		<div className='flex flex-row justify-between items-center '>
			<a className='bg-pink-400' href=''>
				<img src='src\assets\images\icon-back.svg' alt='' />
			</a>
			<h2>{headerText}</h2>
		</div>
	);
}

export default HeaderMenu;
