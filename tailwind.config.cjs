/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Lato', 'LatoExtended', 'monospace']
		},
		borderColor: ['black'],
		extend: {
			fontFamily: {
				mono: ['Courier New', 'monospace']
			},
		},
	},
	plugins: [],
}
