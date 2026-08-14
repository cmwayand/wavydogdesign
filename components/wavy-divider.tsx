export function WavyDivider({ className = "" }: { className?: string }) {
	return (
		<div className={`w-full overflow-hidden ${className}`}>
			<svg
				viewBox="0 0 1200 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-6"
				preserveAspectRatio="none"
			>
				<path
					d="M0 12 C150 2, 300 22, 450 12 S750 2, 900 12 S1050 22, 1200 12"
					stroke="#3a73eb"
					strokeWidth="1.5"
					fill="none"
				/>
			</svg>
		</div>
	);
}
