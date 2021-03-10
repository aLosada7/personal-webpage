import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({navbarBackground}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContentItems, setShowContentItems] = useState(false);

    const contentsList = (
        <ul className={menuOpen ? "nav-list" : "nav-sublist"}>
            {menuOpen ?
            <li className="nav-item"><a role="link" aria-label="back" className="nav-link" onClick={() => setShowContentItems(false)}>
                Back</a>
            </li> : null }
            <li className="nav-item">
                <Link href="/blog"><a role="link" aria-label="blog" className="nav-link">Blog</a></Link>
            </li>
            <li className="nav-item">
                <Link href="/contribution"><a role="link" aria-label="contribution" className="nav-link">Contribution</a></Link>
            </li>
        </ul>
    )

    const navList = (
        <nav role="navigator" className="nav" aria-label="Primary">
            { showContentItems ? <div className="nav-menu-content">{contentsList}</div> :
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/about"><a role="link" aria-label="about" className="nav-link">About</a></Link>
                </li>
                <li className="nav-item subnav" onClick={() => {if (menuOpen) setShowContentItems(true)}}>
                    <a role="link" aria-label="content" className="nav-link">Content
                    </a>
                    {!menuOpen ? contentsList : null}
                </li>
                <li className="nav-item">
                    <Link href="/contact"><a role="link" aria-label="contact" className="nav-link">Contact</a></Link>
                </li>
            </ul> }
        </nav>
    )

    return (
        <>
            <div className="header-title-wrapper" style={{'background-color': (menuOpen || navbarBackground) ? '' : 'transparent'}}>
                <Link href="/"><a role="link" aria-label="home" className="navbar-brand nav-link">Alvaro Losada</a></Link>
                <div className={menuOpen ? "menu-btn open" : "menu-btn"} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="menu-btn__burguer"></div>
                </div>
            </div>
            <div className={menuOpen ? "menu-mobile" : "menu"}>{ navList }</div>
        </>
            
  )
};

export default Navbar;