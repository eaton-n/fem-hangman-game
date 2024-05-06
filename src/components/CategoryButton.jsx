import React from 'react';
import { Link } from 'react-router-dom';

function CategoryButton({ text }) {
	return (
		<Link to={`/game/${text}`} className='py-4 w-64 text-4xl '>
			<span>{text}</span>
		</Link>
	);
}

export default CategoryButton;
