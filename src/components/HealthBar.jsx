import { useEffect, useState } from 'react';

function HealthBar({ barWidth }) {
	const classes = `text-xl font-extrabold text-black h-full bg-green-500 w-[${barWidth}%]`;
	return (
		<div className='h-8 w-[100px] bg-gray-200 overflow-hidden rounded-md '>
			<div className={classes}>
				<span className='p-2'>{barWidth}</span>
			</div>
		</div>
	);
}

export default HealthBar;
