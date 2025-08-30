import React from 'react'
import { motion } from 'framer-motion'

const links = [
	{ href: '#home', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' },
]

export default function Navbar() {
	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 inset-x-0 z-50"
		>
			<div className="container-px mx-auto">
				<div className="glass mt-4 rounded-2xl px-4 py-3 flex items-center justify-between">
					<a href="#home" className="font-bold tracking-tight text-xl">
						<span className="gradient-text">Adisak.dev</span>
					</a>
					<nav className="hidden md:flex gap-6 text-sm text-slate-300">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								className="hover:text-white transition-colors"
							>
								{l.label}
							</a>
						))}
					</nav>
					<a
						href="#contact"
						className="hidden md:inline-block rounded-xl bg-surface px-4 py-2 text-sm text-white shadow-glow-emerald hover:shadow-glow-purple transition-shadow border border-white/10"
					>
						Contact
					</a>
				</div>
			</div>
		</motion.header>
	)
}


