import React from "react";
import Link from "next/link";

import Navbar from "../shared/Navbar";

const DesktopMenuHeader = ({ mainPage }) => {
	return (
		<header role="banner" aria-hidden="false" className={`desktopmenu-header ${mainPage ? "mainmenu" : ""}`}>
			<div className="desktopmenu-header__container">
				<div className="header-title-wrapper">
					<Link href="/">
						<a role="link" aria-label="home" className="navbar-brand">
							alvaro losada
						</a>
					</Link>
				</div>
				<Navbar menu="menu" />
				<div className="social-networks-wrapper">
					<a href="https://www.linkedin.com/in/alvarolosadadecastro/" target="_blank">
						<img src="/linkedin.svg" alt="My linkedin page" />
					</a>
					<a href="https://github.com/aLosada7" target="_blank">
						<img src="/github.svg" alt="My github page" />
					</a>
					<a href="https://codepen.io/alosada7" target="_blank">
						<img src="/codepen.svg" alt="My codepen page" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default DesktopMenuHeader;
