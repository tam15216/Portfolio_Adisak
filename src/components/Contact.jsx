import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
	return (
		<section id="contact" className="py-20 scroll-mt-24">
			<div className="mx-auto max-w-4xl text-center">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-bold mb-6"
				>
					Contact
				</motion.h2>
				<div className="flex justify-center gap-4 flex-wrap">
					<a
						href="mailto:adisak2545@gmail.com"
						className="rounded-xl px-5 py-3 bg-emeraldGlow/10 text-emeraldGlow border border-emeraldGlow/30 hover:shadow-glow-emerald transition-shadow"
					>
						Email
					</a>
					<a
						href="https://line.me/ti/p/XCEjKN8w2m"
						target="_blank"
						rel="noreferrer"
						className="rounded-xl px-5 py-3 bg-surface text-white border border-white/10 hover:shadow-glow-purple transition-shadow"
					>
						LINE
					</a>
					<a
						href="https://www.instagram.com/tum_0245/"
						target="_blank"
						rel="noreferrer"
						className="rounded-xl px-5 py-3 bg-surface text-white border border-white/10 hover:shadow-glow-purple transition-shadow"
					>
						instagram
					</a>
				</div>
			</div>
		</section>
	)
}


