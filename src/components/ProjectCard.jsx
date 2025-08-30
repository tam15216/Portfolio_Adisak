import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags = [], link = '#' }) {
	return (
		<motion.a
			// href={link}
			target="_blank"
			rel="noreferrer"
			whileHover={{ y: -6, scale: 1.02 }}
			className="block rounded-2xl glass p-6 border border-white/10 hover:shadow-glow-emerald transition-shadow"
		>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-sm text-slate-400 mb-4">{description}</p>
			<div className="flex flex-wrap gap-2">
				{tags.map((t) => (
					<span
						key={t}
						className="text-emeraldGlow/90 bg-emeraldGlow/10 border border-emeraldGlow/20 rounded-full px-3 py-1 text-[12px]"
					>
						{t}
					</span>
				))}
			</div>
		</motion.a>
	)
}


