import React from 'react';

function MobileBg({ children }) {
	return (
		<div className='m-0 min-h-screen w-auto bg-mobile-bg bg-auto bg-no-repeat text-white'>
			{children}
		</div>
	);
}

export default MobileBg;
