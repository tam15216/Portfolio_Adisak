import React from 'react'

export default function Background() {
	return (
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute right-[-200px] top-[-120px] h-[520px] w-[520px] rounded-full bg-emeraldGlow/18 blur-[140px]" />
			<div className="absolute left-[-220px] bottom-[-140px] h-[560px] w-[560px] rounded-full bg-electricPurple/14 blur-[160px]" />
		</div>
	)
}


