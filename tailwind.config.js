/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				emeraldGlow: '#00ffcc',
				electricPurple: '#a855f7',
				background: '#0b0f14',
				surface: '#0f1621',
				muted: '#94a3b8',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace'],
			},
			boxShadow: {
				'glow-emerald': '0 0 30px rgba(0, 255, 204, 0.25)',
				'glow-purple': '0 0 30px rgba(168, 85, 247, 0.25)',
			},
		},
	},
	plugins: [],
}


