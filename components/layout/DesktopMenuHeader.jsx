import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";

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
						<Image src="/linkedin.svg" width="18" height="18" alt="My linkedin page" />
					</a>
					<a href="https://github.com/aLosada7" target="_blank">
						<Image src="/github.svg" width="18" height="18" alt="My github page" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default DesktopMenuHeader;
