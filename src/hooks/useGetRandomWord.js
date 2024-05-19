import { useState, useEffect } from 'react';

function useGetRandomWord(category) {
	const [word, setWord] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/data.json');
				if (!response.ok) {
					throw new Error(`Error fetching data: ${response.statusText}`);
				}
				const jsonData = await response.json();
				const randomIndex = Math.floor(
					Math.random() * jsonData.categories[category].length
				);
				const data = jsonData.categories[category][randomIndex].name;
				setWord(data.toUpperCase());
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [category]);
	return { word, loading, error };
}

export default useGetRandomWord;
