import React from 'react'
import ScrollMouse from './ScrollMouse';

const HomeHeader = () => {
    return(
        <div className="page-section header">
            <div className="container header-wrapper">
                <div className="row center">
                    <div className="col-24">
                        <h3><strong>Every coder has their journey.</strong></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-24">
                        <h2><strong>This is mine.</strong></h2>
                    </div>
                </div>
                <span className="scrollmouse-wrapper"><ScrollMouse /></span>
            </div>
        </div>
    )
}

export default HomeHeader;