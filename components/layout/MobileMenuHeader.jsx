import React from "react";
import Link from "next/link";

import SocialNetworks from "./SocialNetworks";

const MobileMenuHeader = ({ mainPage, mobileMenuOpen }) => {
	return (
		<header
			role="banner"
			aria-hidden="true"
			className={`mobilemenu-header ${mainPage ? "mainmenu-mobile" : ""} ${
				mobileMenuOpen ? "mobilemenu-header__open" : ""
			}`}
		>
			<div className="header-title-wrapper">
				<Link href="/">
					<a role="link" aria-label="home" className="navbar-brand">
						alvaro losada
					</a>
				</Link>
			</div>
			<SocialNetworks />
		</header>
	);
};

export default MobileMenuHeader;
