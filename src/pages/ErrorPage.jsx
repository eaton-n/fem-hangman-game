import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
	return (
		<div>
			<h1>Error!</h1>
			<Link to={'/'}>
				<p>Home</p>
			</Link>
		</div>
	);
}

export default ErrorPage;
