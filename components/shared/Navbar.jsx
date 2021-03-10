import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({navbarBackground}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContentItems, setShowContentItems] = useState(false);

    const contentsList = (
        <ul className={menuOpen ? "nav-list" : "nav-sublist"}>
            {menuOpen ?
            <li className="nav-item"><a className="nav-link" onClick={() => setShowContentItems(false)}>
                Back</a>
            </li> : null }
            <li className="nav-item">
                <Link href="/blog"><a className="nav-link" aria-current="page">Blog</a></Link>
            </li>
            <li className="nav-item">
                <Link href="/contribution"><a className="nav-link" aria-current="page">Contributions</a></Link>
            </li>
        </ul>
    )

    const navList = (
        <nav role="navigator" className="nav">
            { showContentItems ? <div className="nav-menu-content">{contentsList}</div> :
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/about"><a className="nav-link" aria-current="page">About</a></Link>
                </li>
                <li className="nav-item subnav" onClick={() => {if (menuOpen) setShowContentItems(true)}}>
                    <a className="nav-link" aria-current="page">Content
                    </a>
                    {!menuOpen ? contentsList : null}
                </li>
                <li className="nav-item">
                    <Link href="/contact"><a className="nav-link" aria-current="page">Contact</a></Link>
                </li>
            </ul> }
        </nav>
    )

    return (
        <>
            <div className="header-title-wrapper" style={{'background-color': (menuOpen || navbarBackground) ? '' : 'transparent'}}>
                <Link href="/"><a className="navbar-brand nav-link">Alvaro Losada</a></Link>
                <div className={menuOpen ? "menu-btn open" : "menu-btn"} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="menu-btn__burguer"></div>
                </div>
            </div>
            <div className={menuOpen ? "menu-mobile" : "menu"}>{ navList }</div>
        </>
            
  )
};

export default Navbar;