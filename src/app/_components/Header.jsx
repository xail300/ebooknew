'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import { useModal } from "../context/ModalContext";
import OffCanvas from "./OffCanvas";
import { usePathname } from "next/navigation";
import { Container } from "react-bootstrap";

const Header = () => {

    // sticky / hover state
    const [isSticky, setIsSticky] = useState(false);
    const [isHover, setIsHover] = useState({
        services: false,
        genre: false
    });

    // hover dropdown
    const handleMouseEnter = (dropdownName) => {
        setIsHover(prevState => ({
            ...prevState,
            [dropdownName]: true
        }))
    }
    const handleMouseLeave = (dropdownName) => {
        setIsHover(prevState => ({
            ...prevState,
            [dropdownName]: false
        }));
    }
    // end

    // add sticky class
    useEffect(() => {
        const handleScrool = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScrool)
        handleScrool();
        return () => {
            window.removeEventListener('scroll', handleScrool)
        }
    }, []);
    // end

    // Off canvas
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const handleClose = () => setOffcanvasShow(false);
    const handleShow = () => setOffcanvasShow(true);
    // end

    // Modal context
    const { modalShow } = useModal();
    // end

    // active link logic
    const pathname = usePathname();
    // end

    // hide offcanvas when click
    useEffect(() => {
        setOffcanvasShow(false);
    }, [pathname])
    // end

    return (
        <>
            <header className={`header ${isSticky ? 'sticky' : ''}`}>
                <nav className="navbar navbar-expand-xl navbar-dark stroke bg-transparent">
                    <Container>
                        <Link className="navbar-brand" href="/">
                            <Image src="/assets/images/logo.png" alt="logo" width={75} height={21} />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={handleShow} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} href="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item dropdown navdesktop">
                                    <Link className={`nav-link ${pathname === '#' ? 'active' : ''}`} href="#" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                                        Services <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                    <ul className={`dropdown-menu ${isHover.services ? 'show' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('services')}
                                        onMouseLeave={() => handleMouseLeave('services')} aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="/services/ebook-writing">eBook Writing</Link></li>
                                        <li><Link className="dropdown-item" href="/services/ebook-editing">eBook Editing</Link></li>
                                        <li><Link className="dropdown-item" href="/services/ebook-marketing">eBook Marketing</Link></li>
                                        <li><Link className="dropdown-item" href="/services/ebook-publishing">eBook Publishing</Link></li>
                                        <li><Link className="dropdown-item" href="/services/ebook-cover">eBook Cover</Link></li>
                                        <li><Link className="dropdown-item" href="/services/children-book">Children Book</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" href="#" onMouseEnter={() => handleMouseEnter('genre')} onMouseLeave={() => handleMouseLeave('genre')}>
                                        Genre <i className="ri-arrow-down-s-line"></i>
                                    </Link>
                                    <ul className={`dropdown-menu ${isHover.genre ? 'show' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('genre')}
                                        onMouseLeave={() => handleMouseLeave('genre')}
                                        aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="/genre/autobiography">Autobiography</Link> </li>
                                        <li><Link className="dropdown-item" href="/genre/business">Business</Link></li>
                                        <li><Link className="dropdown-item" href="/genre/fiction">Fiction</Link> </li>
                                        <li><Link className="dropdown-item" href="/genre/mystery-book">Mystery Book</Link></li>
                                        <li><Link className="dropdown-item" href="/genre/non-fiction">Non-Fiction</Link></li>
                                        <li><Link className="dropdown-item" href="/genre/novel-writing">Novel Writing</Link> </li>
                                        <li><Link className="dropdown-item" href="/genre/self-help">Self Help</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`} href="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-xl-block d-none">
                            <button onClick={modalShow}
                                className="btn btn-theme">Get Started </button>
                        </div>
                    </Container>
                </nav>
            </header>
            {offcanvasShow && <OffCanvas show={offcanvasShow} handleClose={handleClose} pathname={pathname} />}
        </>
    )
}

export default Header
