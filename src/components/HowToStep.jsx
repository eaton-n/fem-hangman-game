import React from 'react';

function HowToStep({ step }) {
	const { stepNo, title, text } = step;
	return (
		<div>
			<span>{stepNo}</span>
			<span>{title}</span>
			<p>{text}</p>
		</div>
	);
}

export default HowToStep;
