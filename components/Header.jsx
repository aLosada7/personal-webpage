import React from 'react'
import ScrollMouse from './ScrollMouse';

const Header = () => {
    return(
        <header id="header" className="page-section header">
            <div className="content-wrapper header-wrapper">
                <h2>Every coder has their journey.</h2>
                <h4>This is mine.</h4>
                <span className="scrollmouse-wrapper"><ScrollMouse /></span>
            </div>
        </header>
    )
}

export default Header;