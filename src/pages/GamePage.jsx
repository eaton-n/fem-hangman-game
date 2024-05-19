import React, { useEffect, useState } from 'react';
import MobileBg from '../components/MobileBg';
import HeaderGame from '../components/HeaderGame';
import GameBoard from '../components/GameBoard';
import Keyboard from '../components/Keyboard';
import { useParams } from 'react-router-dom';
import useGetRandomWord from '../hooks/useGetRandomWord';
import Modal from '../components/Modal';

function GamePage() {
	const [totalGuesses, setTotalGuesses] = useState(8);
	const [{ category }, setCategory] = useState(useParams());
	const { word, loading, error } = useGetRandomWord(category);
	const [guesses, setGuesses] = useState([]);
	const [gameState, setGameState] = useState(null);
	const [barWidth, setBarWidth] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		const wrongGuessCount = guesses.filter(l => !word.includes(l)).length;
		const newBarWidth = parseInt((wrongGuessCount / totalGuesses) * 100);
		setBarWidth(newBarWidth);
		if (wrongGuessCount === totalGuesses) {
			setShowAnswer(true);
			setGameState('YOU LOST');
			setGuesses([]);
			setOpenModal(true);
		}
		if (
			word &&
			word
				.split('')
				.filter(l => l != ' ')
				.every(l => guesses.includes(l))
		) {
			setShowAnswer(true);
			setGameState('YOU WON');
			setOpenModal(true);
		}
	}, [guesses]);

	const closeModal = () => {
		setShowAnswer(false);
		setGameState(null);
		setOpenModal(false);
	};

	const handleGuess = letter => {
		const newGuesses = [...guesses];
		if (!guesses.includes(letter)) {
			newGuesses.push(letter);
		}
		setGuesses(newGuesses);
	};

	return (
		<MobileBg>
			<HeaderGame
				headerText={category}
				guesses={guesses}
				barWidth={barWidth}
				setOpenModal={setOpenModal}
				setGameState={setGameState}
			/>
			{word && <GameBoard word={word} guesses={guesses} />}
			<Keyboard guesses={guesses} handleGuess={handleGuess} />
			{gameState && (
				<Modal
					openModal={openModal}
					closeModal={closeModal}
					text={gameState}
					showAnswer={showAnswer}
					word={word}
				/>
			)}
		</MobileBg>
	);
}

export default GamePage;
