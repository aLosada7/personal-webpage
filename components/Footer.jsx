import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="page-section footer" role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-offset-4 col-mobile-24 col-offset-mobile-0 text-center-mobile">
                        <strong>alvaro losada</strong>
                    </div>
                    <div className="col-8 col-offset-4 col-mobile-24 menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link href="https://www.linkedin.com/in/alvarolosadadecastro/"><a role="link" aria-label="linkedin" className="nav-link">Linkedin</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://github.com/aLosada7"><a role="link" aria-label="github" className="nav-link">Github</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}