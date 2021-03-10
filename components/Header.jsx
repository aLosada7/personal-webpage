import React from 'react'
import ScrollMouse from './ScrollMouse';

const Header = () => {
    return(
        <header role="banner" id="header" className="page-section header">
            <div className="content-wrapper header-wrapper">
                <h1>Every coder has their journey.</h1>
                <h2>This is mine.</h2>
                <span className="scrollmouse-wrapper"><ScrollMouse /></span>
            </div>
        </header>
    )
}

export default Header;