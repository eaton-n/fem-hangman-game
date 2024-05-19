import React from 'react';

function MobileBg({ children }) {
	return (
		<div className='font-sans flex flex-col items-center  bg-mobile-bg sm:bg-tablet-bg lg:bg-desktop-bg m-0 min-h-screen bg-cover bg-center bg-no-repeat text-white'>
			{children}
		</div>
	);
}

export default MobileBg;
