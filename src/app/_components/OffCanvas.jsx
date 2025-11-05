'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

const OffCanvas = ({ show, handleClose, pathname }) => {

    const [openDropdown, setOpenDropdown] = useState({
        editingServices: false,
        ourServices: false
    });

    const handleToggleDropdown = (dropdownName) => {
        setOpenDropdown((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName]
        }));
    };

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Image src="/assets/images/logo.png" alt="logo" width={75} height={21} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} href="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " href="#" onClick={() => handleToggleDropdown('editingServices')}>
                                Services <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className={`dropdown-menu ${openDropdown.editingServices ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/ebook-writing">eBook Writing</Link></li>
                                <li><Link className="dropdown-item" href="/ebook-editing">eBook Editing</Link></li>
                                <li><Link className="dropdown-item" href="/ebook-marketing">eBook Marketing</Link></li>
                                <li><Link className="dropdown-item" href="/ebook-publishing">eBook Publishing</Link></li>
                                <li><Link className="dropdown-item" href="/ebook-cover">eBook Cover</Link></li>
                                <li><Link className="dropdown-item" href="/children-book">Children Book</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " href="#" onClick={() => handleToggleDropdown('ourServices')}>
                                Genre <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className={`dropdown-menu ${openDropdown.ourServices ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/autobiography">Autobiography</Link> </li>
                                <li><Link className="dropdown-item" href="/business">Business</Link></li>
                                <li><Link className="dropdown-item" href="/fiction">Fiction</Link> </li>
                                <li><Link className="dropdown-item" href="/mystery-book">Mystery Book</Link></li>
                                <li><Link className="dropdown-item" href="/non-fiction">Non-Fiction</Link></li>
                                <li><Link className="dropdown-item" href="/novel-writing">Novel Writing</Link> </li>
                                <li><Link className="dropdown-item" href="/self-help">Self Help</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="#">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas