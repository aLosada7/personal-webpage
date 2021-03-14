import React from 'react';

import Navbar from '../shared/Navbar';

const MobileMenuHeader = () => {
    return (
        <header role="banner" aria-hidden="true" className="mobilemenu-header">
            <div className="desktopmenu-header__container">
                
                <div className="social-networks-wrapper">
                    <a href="https://www.linkedin.com/in/alvarolosadadecastro/" target="_blank">
                        <img src="linkedin.svg" alt="My linkedin page"/>
                    </a>
                    <a href="https://github.com/aLosada7" target="_blank">
                        <img src="github.svg" alt="My github page"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default MobileMenuHeader;