import React from 'react'

export default function Footer() {
	return (
		<footer className="py-10 mt-10 border-t border-white/5">
			<div className="container-px mx-auto text-center text-sm text-slate-400">
				© {new Date().getFullYear()} Adisak. Built with React, Tailwind & Framer Motion.
			</div>
		</footer>
	)
}


