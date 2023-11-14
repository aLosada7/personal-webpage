import React from "react";
import Link from "next/link";

import Navbar from "./Navbar";
import SocialNetworks from "./SocialNetworks";

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
				<SocialNetworks />
			</div>
		</header>
	);
};

export default DesktopMenuHeader;
