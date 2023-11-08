/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#86D2FD',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
