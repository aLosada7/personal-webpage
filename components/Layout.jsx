import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import DesktopMenuHeader from './menu/DesktopMenuHeader';
import MobileMenuHeader from './menu/MobileMenuHeader';

const Layout = ({ children }) => {
    const { asPath } = useRouter();
    const [showMenu, setShowMenu] = useState(true);
    const [mainPage, setMainPage] = useState(false);

    useEffect(() => {
        const isMainPage = (asPath === "/");

        const changeBackground = () => {
            setShowMenu(window.scrollY >= (isMainPage ? 250 : 80) ? false : true);
        }

        window.addEventListener('scroll', changeBackground)
        if (isMainPage) setMainPage(true); 
    });

    return (
        <div>
            { showMenu ? <DesktopMenuHeader mainPage={mainPage}></DesktopMenuHeader> : null }
            <MobileMenuHeader></MobileMenuHeader>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default Layout;