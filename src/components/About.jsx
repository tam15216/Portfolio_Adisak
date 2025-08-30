import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section id="about" className="py-20 scroll-mt-24">
			<div className="mx-auto max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-bold mb-6"
				>
					About Me
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="glass rounded-2xl p-6 leading-relaxed text-slate-300"
				>
					<p>
						Skilled in React, Tailwind CSS, and Node.js, with a strong focus on UX/UI to build clean, responsive web applications. 
						Experienced in REST APIs, MySQL/XAMPP databases, and authentication systems. Also develop IoT projects with Arduino/ESP32, 
						such as automated inventory systems, with a passion for learning new technologies and growing as a Full-Stack & IoT Developer.
					</p>
					
				</motion.div>
			</div>
		</section>
	)
}


