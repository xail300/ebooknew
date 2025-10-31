import Link from "next/link"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-4 col-md-12">
                        <div className="footer-logo text-center">
                            <Link href="/"><img src="/assets/images/logo.png" /></Link>
                            <p>Lorem ipsum dolor sit amet consectetur. Purus amet lectus porttitor donec facilisi. Tristique mauris lacus nulla elementum faucibus sit eget ut et.</p>
                            <div className="social">
                                <Link target="_blank" aria-label="Facebook" href="#"><i className="ri-facebook-circle-line"></i></Link>
                                <Link target="_blank" aria-label="LinkedIn" href="#"><i className="ri-instagram-line"></i></Link>
                                <Link target="_blank" aria-label="Instagram" href="#"><i className="ri-linkedin-box-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row pb-2 pt-4">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-links ">
                            <h6>Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Portfolio</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-links ">
                            <h6>Services</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/">eBook Writing</Link></li>
                                <li><Link href="/">eBook Editing</Link></li>
                                <li><Link href="/">eBook Marketing</Link></li>
                                <li><Link href="/">eBook Publishing</Link></li>
                                <li><Link href="/">eBook Cover</Link></li>
                                <li><Link href="/">Children Book</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-links ">
                            <h6>Genre</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/">Autobiography</Link> </li>
                                <li><Link href="/">Business</Link></li>
                                <li><Link href="/">Fiction</Link></li>
                                <li><Link href="/">Mystery Book</Link></li>
                                <li><Link href="/">Non-Fiction</Link></li>
                                <li><Link href="/">Novel Writing</Link></li>
                                <li><Link href="/">Self Help</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-links ">
                            <h6>Reach Us</h6>
                            <ul className="list-unstyled">
                                <li><Link className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2" href="tel:+123456789"><i className="ri-smartphone-line"></i> +1234567890</Link></li>
                                <li><Link className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2" href="mailto:info@example.com"><i className="ri-mail-line"></i> info@example.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row align-items-center mt-0 pt-2 pb-2">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="footer-bootom-links">
                            <span>Copyright © 2025 . Website Name . All Rights Reserved</span>

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-12">
                        <div className="other-links text-lg-end">
                            <p className="mb-0">
                                <Link href="/">Terms &amp; Conditions</Link>
                                <Link href="/">Privacy Policy </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
