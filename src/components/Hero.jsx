import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
	return (
		<section id="home" className="pt-28 sm:pt-32 lg:pt-40 pb-16 scroll-mt-24">
			<div className="mx-auto max-w-5xl text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
				>
					Hi, I'm <span className="gradient-text">Adisak</span> — Web Developer
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.15 }}
					className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
				>
					I build fast, accessible, and delightful web experiences with React and modern
					web tooling.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="mt-8 flex items-center justify-center gap-3"
				>
					<a
						href="#projects"
						className="rounded-xl bg-emeraldGlow/10 text-emeraldGlow border border-emeraldGlow/30 px-5 py-3 text-sm font-semibold hover:shadow-glow-emerald transition-shadow"
					>
						View Projects
					</a>
					<a
						href="#contact"
						className="rounded-xl bg-electricPurple/10 text-electricPurple border border-electricPurple/30 px-5 py-3 text-sm font-semibold hover:shadow-glow-purple transition-shadow"
					>
						Contact Me
					</a>
				</motion.div>
			</div>
		</section>
	)
}


