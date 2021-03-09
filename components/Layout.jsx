import { useState, useEffect } from 'react';
import Navbar from './shared/Navbar';

const Layout = ({ children }) => {
    const [navbarBackground, setNavbarBackground] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            setNavbarBackground(window.scrollY >= 80 ? true : false);
        }

        window.addEventListener('scroll', changeBackground);
    });

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