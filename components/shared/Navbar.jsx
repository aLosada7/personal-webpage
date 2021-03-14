import React, { useState } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

const Navbar = ({navbarBackground}) => {
    const [open, setOpen] = useState(false);
    const [showContentItems, setShowContentItems] = useState(false);

    const contentsList = (
        <ul className={open ? "nav-list" : "nav-sublist"}>
            {open ?
            <li className="nav-item"><a role="link" aria-label="back" className="nav-link" onClick={() => setShowContentItems(false)}>
                Back</a>
            </li> : null }
        </ul>
    )

    const navList = (
        <nav role="navigator" aria-label="Desktop Navigation">
            { showContentItems ? <div className="nav-menu-content">{contentsList}</div> :
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/about"><a role="link" aria-label="about" className="nav-link">About</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog"><a role="link" aria-label="blog" className="nav-link">Blog</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/contribution"><a role="link" aria-label="contribution" className="nav-link">Contribution</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact"><a role="link" aria-label="contact" className="nav-link">Contact</a></Link>
                </li>
            </ul> }
        </nav>
    )

    return (
        <>
            {/*<div className="header-title-wrapper" style={{'background-color': (open || navbarBackground) ? '' : 'transparent'}}>
                <div className={open ? "menu-btn open" : "menu-btn"} onClick={() => setOpen(!open)}>
                    <div className="menu-btn__burguer"></div>
                </div>
    </div>*/}
            <div className={open ? "menu-mobile" : "menu"}>{ navList }</div>
        </>
            
  )
};

export default Navbar;