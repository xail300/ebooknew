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
                            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="#">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " href="#" onClick={() => handleToggleDropdown('editingServices')}>
                                Editing Services <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className={`dropdown-menu ${openDropdown.editingServices ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="premium-editing">Premium Editing</Link></li>
                                <li><Link className="dropdown-item" href="copy-editing">Copy Editing</Link></li>
                                <li><Link className="dropdown-item" href="proofreading">Proofreading</Link></li>
                                <li><Link className="dropdown-item" href="quality-assurance">Quality Assurance</Link></li>
                                <li><Link className="dropdown-item" href="substantive-editing">Substantive Editing</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " href="#" onClick={() => handleToggleDropdown('ourServices')}>
                                Our Services <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className={`dropdown-menu ${openDropdown.ourServices ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="publication-support">Publication Support</Link> </li>
                                <li><Link className="dropdown-item" href="journal-selection">Journal Selection</Link></li>
                                <li><Link className="dropdown-item" href="pre-submission-review">Pre-Submission Review</Link> </li>
                                <li><Link className="dropdown-item" href="formatting-and-artwork-editing">Formatting And Artwork
                                    Editing</Link></li>
                                <li><Link className="dropdown-item" href="journal-submission">Journal Submission</Link></li>
                                <li><Link className="dropdown-item" href="resubmission-support">Resubmission Support</Link> </li>
                                <li><Link className="dropdown-item" href="plagiarism-check">Plagiarism Check</Link></li>
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