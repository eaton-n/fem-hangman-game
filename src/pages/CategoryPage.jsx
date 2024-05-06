import React, { useState } from 'react';
import MobileBg from '../components/MobileBg';
import HeaderMenu from '../components/HeaderMenu';
import CategoryButton from '../components/CategoryButton';

function CategoryPage() {
	const [categories, setCategories] = useState([
		'Movies',
		'TV Shows',
		'Countries',
		'Capital Cities',
		'Animals',
		'Sports',
	]);

	return (
		<MobileBg>
			<HeaderMenu headerText={'Pick a Category'} />
			<div className='flex flex-wrap gap-4 justify-evenly'>
				{categories && categories.map(c => <CategoryButton key={c} text={c} />)}
			</div>
		</MobileBg>
	);
}

export default CategoryPage;
