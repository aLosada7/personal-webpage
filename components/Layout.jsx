import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import Navbar from './shared/Navbar';

const Layout = ({ children }) => {
    const { asPath } = useRouter()
    const [navbarBackground, setNavbarBackground] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            setNavbarBackground(window.scrollY >= 80 ? true : false);
        }

        if (asPath === "/") window.addEventListener('scroll', changeBackground)
        else setNavbarBackground(true);
    });

    console.log(asPath)

    return (
        <div>
            <div className={navbarBackground ? "nav-wrapper background": "nav-wrapper"}>
                <Navbar />
            </div>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default Layout;