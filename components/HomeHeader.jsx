import React from 'react'
import ScrollMouse from './ScrollMouse';

const HomeHeader = () => {
    return(
        <header role="banner" id="header" className="page-section header">
            <div className="container header-wrapper">
                <div className="row center">
                    <div className="col-24">
                        <h1>Every coder has their journey.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-24">
                        <h2>This is mine.</h2>
                    </div>
                </div>
                <span className="scrollmouse-wrapper"><ScrollMouse /></span>
            </div>
        </header>
    )
}

export default HomeHeader;