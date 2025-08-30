import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'

const data = [
	{
		title: 'POS System',
		description: 'Modern point-of-sale web app with offline support and analytics.',
		tags: ['React', 'Flask', 'SQLite'],
		link: '#',
	},
	{
		title: 'Creating a Gas (LPG) Detection System Learning Media',
		description: 'Developed an Arduino-based prototype to detect LPG gas leakage using MQ-series sensors. Integrated buzzer and LED indicators to demonstrate real-time alerts, designed as learning media for safety awareness.',
		tags: ['Arduino', 'ESP-Now' ,'IoT'],
		link: '#',
	},
	{
		title: 'Portfolio Website',
		description: 'Personal portfolio with animations and responsive design.',
		tags: ['Vite', 'Framer Motion', 'Tailwind'],
		link: '#',
	},
	{
		title: 'Automation Bot with Selenium',
		description: 'Built an automation bot with Python and Selenium to handle repetitive tasks such as form filling, button clicking, and navigation, reducing manual effort and improving efficiency.',
		tags: ['Python', 'Selenium', 'Web Automation', 'Bot Development'],
		link: '#'
	},
]

export default function Projects() {
	return (
		<section id="projects" className="py-20 scroll-mt-24">
			<div className="mx-auto max-w-6xl">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-bold mb-6"
				>
					Projects
				</motion.h2>
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						hidden: { opacity: 0 },
						show: { opacity: 1, transition: { staggerChildren: 0.08 } },
					}}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
				>
					{data.map((p) => (
						<motion.div key={p.title} variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
							<ProjectCard {...p} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}


