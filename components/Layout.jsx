import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import DesktopMenuHeader from './menu/DesktopMenuHeader';
import MobileMenuHeader from './menu/MobileMenuHeader';

const Layout = ({ children }) => {
    const { asPath } = useRouter();
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

    return (
        <div>
            { showMenu ? <DesktopMenuHeader mainPage={page === ""}></DesktopMenuHeader> : null }
            <MobileMenuHeader></MobileMenuHeader>
            <div className="menu-btn" onClick={() => setOpen(!open)}>
                    <div className="menu-btn__burguer"></div>
            </div>
            <div className={`main-container background__${page}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;