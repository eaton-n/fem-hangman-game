/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Mouse Memoirs', 'sans-serif'],
		},
		backgroundImage: {
			'mobile-bg': "url('/images/background-mobile.svg')",
		},
	},

	plugins: [],
};
