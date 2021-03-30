import React from 'react';
import Link from 'next/link';

const MobileMenuHeader = ({mainPage, mobileMenuOpen}) => {
    return (
        <header role="banner" 
            aria-hidden="true" 
            className={`mobilemenu-header ${mainPage ? 'mainmenu-mobile' : ''} ${mobileMenuOpen ? 'mobilemenu-header__open' : ''}`}>
            <div className="header-title-wrapper">
                <Link href="/"><a role="link" aria-label="home" className="navbar-brand">alvaro losada</a></Link>
            </div>
            <div className="social-networks-wrapper">
                <a href="https://www.linkedin.com/in/alvarolosadadecastro/" target="_blank">
                    <img src="linkedin.svg" alt="My linkedin page"/>
                </a>
                <a href="https://github.com/aLosada7" target="_blank">
                    <img src="github.svg" alt="My github page"/>
                </a>
            </div>
        </header>
    )
}

export default MobileMenuHeader;