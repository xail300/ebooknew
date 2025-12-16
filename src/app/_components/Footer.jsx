import Link from "next/link"
import ContactSection from "./ContactInfo"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={8}>
                        <div className="footer-logo text-center">
                            <Link href="/"><img src="/assets/images/logo.png" /></Link>
                            <p>Manhattan Book Publisher has a writing service on eBooks that is dedicated to ensuring that your ideas are converted into captivating digital manuscripts that have the potential to hold the attention of readers all over the world.</p>
                            <div className="social">
                                <Link target="_blank" aria-label="Facebook" href="#"><i className="ri-facebook-circle-line"></i></Link>
                                <Link target="_blank" aria-label="LinkedIn" href="#"><i className="ri-instagram-line"></i></Link>
                                <Link target="_blank" aria-label="Instagram" href="#"><i className="ri-linkedin-box-line"></i></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="pb-2 pt-4">
                    <Col xl={3} lg={3} md={6}>
                        <div className="footer-links">
                            <h6>Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6}>
                        <div className="footer-links">
                            <h6>Services</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/services/ebook-writing">eBook Writing</Link></li>
                                <li><Link href="/services/ebook-editing">eBook Editing</Link></li>
                                <li><Link href="/services/ebook-marketing">eBook Marketing</Link></li>
                                <li><Link href="/services/ebook-publishing">eBook Publishing</Link></li>
                                <li><Link href="/services/ebook-cover">eBook Cover</Link></li>
                                <li><Link href="/services/children-book">Children Book</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6}>
                        <div className="footer-links mb-0">
                            <h6>Genre</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/genre/autobiography">Autobiography</Link> </li>
                                <li><Link href="/genre/business">Business</Link></li>
                                <li><Link href="/genre/fiction">Fiction</Link></li>
                                <li><Link href="/genre/mystery-book">Mystery Book</Link></li>
                                <li><Link href="/genre/non-fiction">Non-Fiction</Link></li>
                                <li><Link href="/genre/novel-writing">Novel Writing</Link></li>
                                <li><Link href="/genre/self-help">Self Help</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={6}>
                        <div className="footer-links mb-0">
                            <h6>Reach Us</h6>
                            <ContactSection />
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center mt-0 pt-2 pb-2">
                    <Col xl={6} lg={7} md={12}>
                        <div className="footer-bootom-links">
                            <p>Copyright © 2025 . Website Name . All Rights Reserved</p>

                        </div>
                    </Col>
                    <Col xl={6} lg={5} md={12}>
                        <div className="other-links text-lg-end">
                            <p className="mb-0">
                                <Link href="/">Terms &amp; Conditions</Link>
                                <Link href="/">Privacy Policy </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
