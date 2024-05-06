import React, { useEffect, useState } from 'react';
import MobileBg from '../components/MobileBg';
import HeaderGame from '../components/HeaderGame';
import GameBoard from '../components/GameBoard';
import Keyboard from '../components/Keyboard';
import { useParams } from 'react-router-dom';
import useGetRandomWord from '../hooks/useGetRandomWord';

function GamePage() {
	const [{ category }, setCategory] = useState(useParams());
	const [word, setWord] = useState(null);

	useEffect(() => {
		const tempWord = useGetRandomWord(category);
		setWord(tempWord);
		console.log(tempWord);
	}, []);

	return (
		<MobileBg>
			<HeaderGame headerText={category} />
			{word && <GameBoard word={word} />}
			<Keyboard />
		</MobileBg>
	);
}

export default GamePage;
