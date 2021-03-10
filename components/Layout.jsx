import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import Navbar from './shared/Navbar';

const Layout = ({ children }) => {
    const { asPath } = useRouter()
    const [navbarBackground, setNavbarBackground] = useState(false);

    useEffect(() => {
        if (asPath !== "/") setNavbarBackground(true); 
    });

    return (
        <div>
            <div className={navbarBackground ? "nav-wrapper background": "nav-wrapper"}>
                <Navbar navbarBackground={navbarBackground}/>
            </div>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default Layout;