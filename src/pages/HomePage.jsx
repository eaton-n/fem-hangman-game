import React from 'react';
import MobileBg from '../components/MobileBg';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<MobileBg>
			<div className=' my-auto px-4 flex flex-col gap-4 items-center'>
				<img src='\images\logo.svg' alt='' className='' />
				<Link to={'categories/'} className='rounded-full bg-pink-400'>
					<img src='\images\icon-play.svg' alt='' />{' '}
				</Link>

				<Link to={'how-to/'} className='bg-blue-400 rounded-full px-6 py-3'>
					How To Play
				</Link>
			</div>
		</MobileBg>
	);
}

export default HomePage;
