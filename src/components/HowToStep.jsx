import React from 'react';

function HowToStep({ step }) {
	const { stepNo, title, text } = step;
	return (
		<div className='bg-white p-4 rounded-xl grid grid-cols-5 grid-rows-3 sm:grid-rows-2 items-center justify-items-start h-28 sm:h-32 '>
			<span className='text-blue-600 text-2xl sm:w-full sm:text-6xl row-span-1 sm:row-span-2  text-center '>
				{stepNo}
			</span>
			<span className='text-2xl uppercase  col-span-4 '>{title}</span>
			<span className='text-slate-500 row-span-2 col-span-5 sm:col-span-4 sm:text-lg'>
				{text}
			</span>
		</div>
	);
}

export default HowToStep;
