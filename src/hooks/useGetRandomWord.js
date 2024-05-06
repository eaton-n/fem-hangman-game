function useGetRandomWord(category) {
	async function getRandomWord() {
		const res = await fetch('/data.json');
		const data = await res.json();
		const randomIndex = Math.floor(
			Math.random() * data.categories[category].length
		);
		const word = data.categories[category][randomIndex].name;
		console.log(word);
		return word;
	}
	const a = getRandomWord();
	console.log(a);
	return a;
}
export default useGetRandomWord;
