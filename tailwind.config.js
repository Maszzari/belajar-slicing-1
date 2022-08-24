/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./src/*.{html, js}"],
	theme: {
		extend: {
			colors: {
				"black-2": "#969696",
				"black-1": "#696969",
			},
		},
		container: {
			padding: {
				DEFAULT: ".8rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			center: true,
		},
	},
	plugins: [],
};
