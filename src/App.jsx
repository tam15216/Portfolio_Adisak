import React from 'react'
import Navbar from './components/Navbar.jsx'
import Background from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
	return (
		<div className="min-h-screen bg-background">
			<Background />
			<Navbar />
			<main className="container-px mx-auto max-w-7xl xl:max-w-screen-2xl">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}
