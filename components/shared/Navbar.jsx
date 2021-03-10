import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContentItems, setShowContentItems] = useState(false);

    const contentsList = (
        <ul className={menuOpen ? "nav-list" : "nav-sublist"}>
            {menuOpen ?
            <li className="nav-item"><a className="nav-link" onClick={() => setShowContentItems(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>Back</a>
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
                    {menuOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    : null}
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
            <div className="header-title-wrapper">
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