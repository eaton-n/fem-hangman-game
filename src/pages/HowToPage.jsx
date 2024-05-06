import React from 'react';
import MobileBg from '../components/MobileBg';
import HeaderMenu from '../components/HeaderMenu';
import HowToStep from '../components/HowToStep';

function HowToPage() {
	return (
		<MobileBg>
			<HeaderMenu headerText={'How to Play'} />
			<HowToStep
				step={{
					stepNo: '01',
					title: 'Choose a Category',
					text: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
				}}
			/>

			<HowToStep
				step={{
					stepNo: '02',
					title: 'Guess letters',
					text: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
				}}
			/>
			<HowToStep
				step={{
					stepNo: '03',
					title: 'Win or lose',
					text: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
				}}
			/>
		</MobileBg>
	);
}

export default HowToPage;
