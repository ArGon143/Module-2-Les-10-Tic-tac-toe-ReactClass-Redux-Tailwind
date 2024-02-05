/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				calc: 'calc(10px + 2vmin)',
			},
			boxShadow: {
				1: '2px 2px 3px rgb(245, 245, 220)',
			},
			colors: {
				'dark-blue': '#282c34',
				green: '#008000',
			},
			spacing: {
				'-1px': '-1px',
			},
		},
		plugins: [],
	},
};
