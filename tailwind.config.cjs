/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,flowbite}'
],
	theme: {
		extend: {
			display: ["group-hover"]
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	],
}
