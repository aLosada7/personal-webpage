import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import DesktopMenuHeader from './menu/DesktopMenuHeader';
import MobileMenuHeader from './menu/MobileMenuHeader';
import Navbar from './shared/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const { asPath } = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [page, setPage] = useState(false);

    useEffect(() => {
        setPage(asPath);
    }, [])

    useEffect(() => {
        setPage(asPath.substring(1));
        const changeBackground = () => {
            setShowMenu(window.scrollY >= ((page === "") ? 250 : 80) ? false : true);
        }

        window.addEventListener('scroll', changeBackground)
    });

    const showMenuContent = (
        <>
            <DesktopMenuHeader mainPage={page === ""}></DesktopMenuHeader> 
            <MobileMenuHeader mainPage={page === ""} mobileMenuOpen={mobileMenuOpen}></MobileMenuHeader>
            <div className={`menu-btn ${mobileMenuOpen ? 'open' : ''}`} 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <div className={`menu-btn__burguer ${(page === "") ? 'main-page' : ''}`}></div>
            </div>
        </>
    )

    return (
        <div>
            { showMenu ? showMenuContent : null }
            <div className={`main-container background__${page}`}>
                {children}
            </div>
            <div className={`menu-container ${mobileMenuOpen ? 'menu-container-open' : ''}`}>
                <Navbar menu="menu-mobile" />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;