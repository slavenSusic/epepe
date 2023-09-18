/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,flowbite}'
],
	theme: {
		extend: {
			display: ["group-hover"]
		},
		typography: {
			sm: {
				css: [
				  {
					fontSize: '0.875rem',
					lineHeight: '1.71',
					p: {
					  marginTop: '1rem',
					  marginBottom: '1rem',
					},
					'[class~="lead"]': {
					  fontSize: '1.125rem',
					  lineHeight: '1.56',
					  marginTop: '0.89rem',
					  marginBottom: '0.89rem',
					},
					blockquote: {
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					  paddingLeft: '1.11rem',
					},
					h1: {
					  fontSize: '1.92rem',
					  marginTop: '0',
					  marginBottom: '1.33rem',
					  lineHeight: '1.2',
					},
					h2: {
					  fontSize: '1.43rem',
					  marginTop: '2rem',
					  marginBottom: '1rem',
					  lineHeight: '1.4',
					},
					h3: {
					  fontSize: '1.29rem',
					  marginTop: '1.56rem',
					  marginBottom: '0.44rem',
					  lineHeight: '1.56',
					},
					h4: {
					  marginTop: '1.14rem',
					  marginBottom: '0.57rem',
					  lineHeight: '1.43',
					},
					img: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					video: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					figure: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '0.86rem',
					  lineHeight: '1.33',
					  marginTop: '0.67rem',
					},
					code: {
					  fontSize: '0.86rem',
					},
					'h2 code': {
					  fontSize: '1.25rem',
					},
					'h3 code': {
					  fontSize: '1.14rem',
					},
					pre: {
					  fontSize: '0.86rem',
					  lineHeight: '1.67',
					  marginTop: '1.67rem',
					  marginBottom: '1.67rem',
					  borderRadius: '0.25rem',
					  paddingTop: '0.57rem',
					  paddingRight: '0.86rem',
					  paddingBottom: '0.57rem',
					  paddingLeft: '0.86rem',
					},
					ol: {
					  marginTop: '1rem',
					  marginBottom: '1rem',
					  paddingLeft: '1.57rem',
					},
					ul: {
					  marginTop: '1rem',
					  marginBottom: '1rem',
					  paddingLeft: '1.57rem',
					},
					li: {
					  marginTop: '0.29rem',
					  marginBottom: '0.29rem',
					},
					'ol > li': {
					  paddingLeft: '0.43rem',
					},
					'ul > li': {
					  paddingLeft: '0.43rem',
					},
					'> ul > li p': {
					  marginTop: '0.57rem',
					  marginBottom: '0.57rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '0.57rem',
					  marginBottom: '0.57rem',
					},
					hr: {
					  marginTop: '2.86rem',
					  marginBottom: '2.86rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '0.86rem',
					  lineHeight: '1.29',
					},
					'thead th': {
					  paddingRight: '0.86rem',
					  paddingBottom: '0.57rem',
					  paddingLeft: '0.86rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '0.57rem',
					  paddingRight: '0.86rem',
					  paddingBottom: '0.57rem',
					  paddingLeft: '0.86rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  base: {
				css: [
				  {
					
					lineHeight: '1',
					p: {
						fontSize: '0.5em',
					  marginTop: '1.25rem',
					  marginBottom: '1.25rem',
					},
					'[class~="lead"]': {
					  fontSize: '.25rem',
					  lineHeight: '1.6',
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					},
					p1: {
						fontSize: '0.8em',
					  marginTop: '1.25rem',
					  marginBottom: '1.25rem',
					  lineHeight: '2',
					},
					blockquote: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					  paddingLeft: '1rem',
					},
					h1: {
					  fontSize: '2.25rem',
					  marginTop: '0',
					  marginBottom: '1.6rem',
					  lineHeight: '1.2',
					},
					h2: {
					  fontSize: '1.8rem',
					  marginTop: '2.4rem',
					  marginBottom: '1.2rem',
					  lineHeight: '1.3',
					},
					h3: {
					  fontSize: '1.5rem',
					  marginTop: '1.8rem',
					  marginBottom: '0.6rem',
					  lineHeight: '1.3',
					},
					h4: {
					  marginTop: '1.2rem',
					  marginBottom: '0.6rem',
					  lineHeight: '1.4',
					},
					img: {
					  marginTop: '1.75rem',
					  marginBottom: '1.75rem',
					},
					video: {
					  marginTop: '1.75rem',
					  marginBottom: '1.75rem',
					},
					figure: {
					  marginTop: '1.75rem',
					  marginBottom: '1.75rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '0.8rem',
					  lineHeight: '1.5',
					  marginTop: '0.6rem',
					},
					code: {
					  fontSize: '0.8rem',
					},
					'h2 code': {
					  fontSize: '1.5rem',
					},
					'h3 code': {
					  fontSize: '1.3rem',
					},
					pre: {
					  fontSize: '0.8rem',
					  lineHeight: '1.6',
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					  borderRadius: '0.2rem',
					  paddingTop: '0.4rem',
					  paddingRight: '0.8rem',
					  paddingBottom: '0.4rem',
					  paddingLeft: '0.8rem',
					},
					ol: {
					  marginTop: '1.25rem',
					  marginBottom: '1.25rem',
					  paddingLeft: '1.5rem',
					},
					ul: {
					  marginTop: '1.25rem',
					  marginBottom: '1.25rem',
					  paddingLeft: '1.5rem',
					},
					li: {
					  marginTop: '0.3rem',
					  marginBottom: '0.3rem',
					},
					'ol > li': {
					  paddingLeft: '0.4rem',
					},
					'ul > li': {
					  paddingLeft: '0.4rem',
					},
					'> ul > li p': {
					  marginTop: '0.5rem',
					  marginBottom: '0.5rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1.25rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1.25rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1.25rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1.25rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '0.5rem',
					  marginBottom: '0.5rem',
					},
					hr: {
					  marginTop: '3rem',
					  marginBottom: '3rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '0.8rem',
					  lineHeight: '1.25',
					},
					'thead th': {
					  paddingRight: '0.8rem',
					  paddingBottom: '0.4rem',
					  paddingLeft: '0.8rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '0.4rem',
					  paddingRight: '0.8rem',
					  paddingBottom: '0.4rem',
					  paddingLeft: '0.8rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  md: {
				css: [
				  {
					fontSize: '0.94rem',
					lineHeight: '1.73',
					p: {
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					},
					'[class~="lead"]': {
					  fontSize: '1.12rem',
					  lineHeight: '1.53',
					  marginTop: '0.89rem',
					  marginBottom: '0.89rem',
					},
					blockquote: {
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					  paddingLeft: '1.07rem',
					},
					h1: {
					  fontSize: '1.77rem',
					  marginTop: '0',
					  marginBottom: '1.33rem',
					  lineHeight: '1.23',
					},
					h2: {
					  fontSize: '1.33rem',
					  marginTop: '1.88rem',
					  marginBottom: '1rem',
					  lineHeight: '1.36',
					},
					h3: {
					  fontSize: '1.22rem',
					  marginTop: '1.44rem',
					  marginBottom: '0.44rem',
					  lineHeight: '1.45',
					},
					h4: {
					  marginTop: '1.1rem',
					  marginBottom: '0.55rem',
					  lineHeight: '1.45',
					},
					img: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					video: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					figure: {
					  marginTop: '1.71rem',
					  marginBottom: '1.71rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '0.82rem',
					  lineHeight: '1.34',
					  marginTop: '0.61rem',
					},
					code: {
					  fontSize: '0.82rem',
					},
					'h2 code': {
					  fontSize: '1.26rem',
					},
					'h3 code': {
					  fontSize: '1.16rem',
					},
					pre: {
					  fontSize: '0.82rem',
					  lineHeight: '1.59',
					  marginTop: '1.59rem',
					  marginBottom: '1.59rem',
					  borderRadius: '0.23rem',
					  paddingTop: '0.53rem',
					  paddingRight: '0.82rem',
					  paddingBottom: '0.53rem',
					  paddingLeft: '0.82rem',
					},
					ol: {
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					  paddingLeft: '1.48rem',
					},
					ul: {
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					  paddingLeft: '1.48rem',
					},
					li: {
					  marginTop: '0.29rem',
					  marginBottom: '0.29rem',
					},
					'ol > li': {
					  paddingLeft: '0.41rem',
					},
					'ul > li': {
					  paddingLeft: '0.41rem',
					},
					'> ul > li p': {
					  marginTop: '0.52rem',
					  marginBottom: '0.52rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1.2rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1.2rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1.2rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1.2rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '0.52rem',
					  marginBottom: '0.52rem',
					},
					hr: {
					  marginTop: '2.76rem',
					  marginBottom: '2.76rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '0.82rem',
					  lineHeight: '1.29',
					},
					'thead th': {
					  paddingRight: '0.82rem',
					  paddingBottom: '0.53rem',
					  paddingLeft: '0.82rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '0.53rem',
					  paddingRight: '0.82rem',
					  paddingBottom: '0.53rem',
					  paddingLeft: '0.82rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  lg: {
				css: [
				  {
					fontSize: '1.23rem',
					lineHeight: '1.3',
					p: {
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					},
					'[class~="lead"]': {
					  fontSize: '1.17rem',
					  lineHeight: '1.45',
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					},
					p1: {
						fontSize: '0.8em',
					  marginTop: '1.25rem',
					  marginBottom: '1.25rem',
					  lineHeight: '1.8',
					  fontWeight:'400'
					},
					blockquote: {
					  marginTop: '2.13rem',
					  marginBottom: '2.13rem',
					  paddingLeft: '1rem',
					},
					h1: {
					  fontSize: '2.67rem',
					  marginTop: '0',
					  marginBottom: '2.67rem',
					  lineHeight: '1',
					},
					h2: {
					  fontSize: '1em',
					  marginTop: '3.11rem',
					  marginBottom: '1.78rem',
					  lineHeight: '1.33',
					},
					h3: {
					  fontSize: '1.33rem',
					  marginTop: '2.67rem',
					  marginBottom: '0.89rem',
					  lineHeight: '1.33',
					},
					h4: {
					  marginTop: '1.78rem',
					  marginBottom: '0.44rem',
					  lineHeight: '1.56',
					},
					img: {
					  marginTop: '1.78rem',
					  marginBottom: '1.78rem',
					},
					video: {
					  marginTop: '1.78rem',
					  marginBottom: '1.78rem',
					},
					figure: {
					  marginTop: '1.78rem',
					  marginBottom: '1.78rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '0.89rem',
					  lineHeight: '1.5',
					  marginTop: '1rem',
					},
					code: {
					  fontSize: '0.89rem',
					},
					'h2 code': {
					  fontSize: '1.39rem',
					},
					'h3 code': {
					  fontSize: '1.17rem',
					},
					pre: {
					  fontSize: '0.89rem',
					  lineHeight: '1.75',
					  marginTop: '2.22rem',
					  marginBottom: '2.22rem',
					  borderRadius: '0.53rem',
					  paddingTop: '1rem',
					  paddingRight: '1.33rem',
					  paddingBottom: '1rem',
					  paddingLeft: '1.33rem',
					},
					ol: {
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					  paddingLeft: '1.56rem',
					},
					ul: {
					  marginTop: '1.33rem',
					  marginBottom: '1.33rem',
					  paddingLeft: '1.56rem',
					},
					li: {
					  marginTop: '0.67rem',
					  marginBottom: '0.67rem',
					},
					'ol > li': {
					  paddingLeft: '0.44rem',
					},
					'ul > li': {
					  paddingLeft: '0.44rem',
					},
					'> ul > li p': {
					  marginTop: '0.89rem',
					  marginBottom: '0.89rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1.33rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1.33rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1.33rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1.33rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '0.89rem',
					  marginBottom: '0.89rem',
					},
					hr: {
					  marginTop: '3.11rem',
					  marginBottom: '3.11rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '0.89rem',
					  lineHeight: '1.5',
					},
					'thead th': {
					  paddingRight: '0.67rem',
					  paddingBottom: '1rem',
					  paddingLeft: '0.67rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '1rem',
					  paddingRight: '0.67rem',
					  paddingBottom: '1rem',
					  paddingLeft: '0.67rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  xl: {
				css: [
				  {
					
				
					p: {
					  marginTop: '2.6rem',
					  marginBottom: '1.2rem',
					  fontSize: '1.83rem',
					},
					'[class~="lead"]': {
					  fontSize: '1.2rem',
					  lineHeight: '1.5',
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					},
					blockquote: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					  paddingLeft: '1.6rem',
					},
					h1: {
					  fontSize: '2.8rem',
					  marginTop: '0',
					  marginBottom: '2.8rem',
					  lineHeight: '1',
					},
					h2: {
					  fontSize: '2.5rem',
					  marginTop: '3.6rem',
					  marginBottom: '1rem',
					  lineHeight: '1',
					},
					h3: {
					  fontSize: '2.2rem',
					  marginTop: '1.6rem',
					  marginBottom: '0.8rem',
					  lineHeight: '0.9',
					},
					h4: {
					  marginTop: '1.6rem',
					  marginBottom: '0.4rem',
					  lineHeight: '1.6',
					},
					img: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					},
					video: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					},
					figure: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '0.8rem',
					  lineHeight: '1.33',
					  marginTop: '1rem',
					},
					code: {
					  fontSize: '0.8rem',
					},
					'h2 code': {
					  fontSize: '1.4rem',
					},
					'h3 code': {
					  fontSize: '1.2rem',
					},
					pre: {
					  fontSize: '0.8rem',
					  lineHeight: '1.56',
					  marginTop: '2rem',
					  marginBottom: '2rem',
					  borderRadius: '0.53rem',
					  paddingTop: '1rem',
					  paddingRight: '1.33rem',
					  paddingBottom: '1rem',
					  paddingLeft: '1.33rem',
					},
					ol: {
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					  paddingLeft: '1.78rem',
					},
					ul: {
					  marginTop: '1.2rem',
					  marginBottom: '1.2rem',
					  paddingLeft: '1.78rem',
					},
					li: {
					  marginTop: '0.6rem',
					  marginBottom: '0.6rem',
					},
					'ol > li': {
					  paddingLeft: '0.42rem',
					},
					'ul > li': {
					  paddingLeft: '0.42rem',
					},
					'> ul > li p': {
					  marginTop: '0.8rem',
					  marginBottom: '0.8rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1.2rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1.2rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1.2rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1.2rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '0.8rem',
					  marginBottom: '0.8rem',
					},
					hr: {
					  marginTop: '3.6rem',
					  marginBottom: '3.6rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '0.8rem',
					  lineHeight: '1.33',
					},
					'thead th': {
					  paddingRight: '0.8rem',
					  paddingBottom: '1.33rem',
					  paddingLeft: '0.8rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '1.33rem',
					  paddingRight: '0.8rem',
					  paddingBottom: '1.33rem',
					  paddingLeft: '0.8rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  '2xl': {
				css: [
				  {
					
					lineHeight: '1',
					p: {
					  fontSize: '1.5rem',
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					},
					'[class~="lead"]': {
					  fontSize: '1.25rem',
					  lineHeight: '1.47',
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					},
					blockquote: {
					  marginTop: '2.67rem',
					  marginBottom: '2.67rem',
					  paddingLeft: '1.33rem',
					},
					h1: {
					  fontSize: '4.0rem',
					  marginTop: '0',
					  marginBottom: '3rem',
					  lineHeight: '1',
					},
					h2: {
					  fontSize: '3.1rem',
					  marginTop: '4.67rem',
					  marginBottom: '3.33rem',
					  lineHeight: '1.3',
					},
					h3: {
					  fontSize: '2.5rem',
					  marginTop: '2.67rem',
					  marginBottom: '1.33rem',
					  lineHeight: '1.',
					},
					h4: {
					  marginTop: '3.2rem',
					  marginBottom: '0.67rem',
					  lineHeight: '1.6',
					},
					img: {
					  marginTop: '2.67rem',
					  marginBottom: '2.67rem',
					},
					video: {
					  marginTop: '2.67rem',
					  marginBottom: '2.67rem',
					},
					figure: {
					  marginTop: '2.67rem',
					  marginBottom: '2.67rem',
					},
					'figure > *': {
					  marginTop: '0',
					  marginBottom: '0',
					},
					figcaption: {
					  fontSize: '1rem',
					  lineHeight: '1.5',
					  marginTop: '1rem',
					},
					code: {
					  fontSize: '1rem',
					},
					'h2 code': {
					  fontSize: '1.75rem',
					},
					'h3 code': {
					  fontSize: '1.5rem',
					},
					pre: {
					  fontSize: '1rem',
					  lineHeight: '1.75',
					  marginTop: '2.67rem',
					  marginBottom: '2.67rem',
					  borderRadius: '0.53rem',
					  paddingTop: '1.33rem',
					  paddingRight: '1.33rem',
					  paddingBottom: '1.33rem',
					  paddingLeft: '1.33rem',
					},
					ol: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					  paddingLeft: '2rem',
					},
					ul: {
					  marginTop: '1.6rem',
					  marginBottom: '1.6rem',
					  paddingLeft: '2rem',
					},
					li: {
					  marginTop: '0.8rem',
					  marginBottom: '0.8rem',
					},
					'ol > li': {
					  paddingLeft: '0.53rem',
					},
					'ul > li': {
					  paddingLeft: '0.53rem',
					},
					'> ul > li p': {
					  marginTop: '1.07rem',
					  marginBottom: '1.07rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '1.6rem',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '1.6rem',
					},
					'> ol > li > *:first-child': {
					  marginTop: '1.6rem',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '1.6rem',
					},
					'ul ul, ul ol, ol ul, ol ol': {
					  marginTop: '1.07rem',
					  marginBottom: '1.07rem',
					},
					hr: {
					  marginTop: '4.67rem',
					  marginBottom: '4.67rem',
					},
					'hr + *': {
					  marginTop: '0',
					},
					'h2 + *': {
					  marginTop: '0',
					},
					'h3 + *': {
					  marginTop: '0',
					},
					'h4 + *': {
					  marginTop: '0',
					},
					table: {
					  fontSize: '1rem',
					  lineHeight: '1.5',
					},
					'thead th': {
					  paddingRight: '0.8rem',
					  paddingBottom: '1.33rem',
					  paddingLeft: '0.8rem',
					},
					'thead th:first-child': {
					  paddingLeft: '0',
					},
					'thead th:last-child': {
					  paddingRight: '0',
					},
					'tbody td, tfoot td': {
					  paddingTop: '1.33rem',
					  paddingRight: '0.8rem',
					  paddingBottom: '1.33rem',
					  paddingLeft: '0.8rem',
					},
					'tbody td:first-child, tfoot td:first-child': {
					  paddingLeft: '0',
					},
					'tbody td:last-child, tfoot td:last-child': {
					  paddingRight: '0',
					},
				  },
				  {
					'> :first-child': {
					  marginTop: '0',
					},
					'> :last-child': {
					  marginBottom: '0',
					},
				  },
				],
			  },
			  
		  },
		  
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	],
}









