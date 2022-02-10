import ScrollMouse from "../components/ScrollMouse";

export default function SanValentine() {
	return (
		<>
			<div className="sv-slide">
				<h1 class="gradient-text">Here we go!</h1>
				<span className="scrollmouse-wrapper">
					<ScrollMouse />
				</span>
			</div>
			<div className="sv-slide">
				<h1 class="gradient-text" style={{ fontSize: "12vmin" }}>
					London!!!!!!!!
				</h1>
			</div>
			<div className="sv-slide">
				<h1 class="gradient-text">Get ready! We leave March 25th!</h1>
			</div>
			<div className="sv-slide">
				<h1 class="gradient-text" style={{ fontSize: "10vmin" }}>
					It's going to be a great weekend!
				</h1>
			</div>
		</>
	);
}
