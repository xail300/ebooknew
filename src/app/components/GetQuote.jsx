'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'


const GetQuote = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        // form sending to email
        // const formData = new FormData(form);
        // await sendMail(formData);
        // end
    };

    return (
        <section className="contact-us">
            <div className="container">
                <div className="contact-bg">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="contact-left">
                                <Image src="/assets/images/contact-img.png" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <Form.Label htmlFor="name">Name*</Form.Label>
                                            <Form.Control required type="text" id="name" name='name' placeholder="Enter Name*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <Form.Label htmlFor="email">Email*</Form.Label>
                                            <Form.Control required type="email" id="email" name='email' placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4">
                                            <Form.Label htmlFor="contact">Contact No.*</Form.Label>
                                            <Form.Control type="number" id="contact" name="phone" placeholder="Enter Phone Number*" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4">
                                            <Form.Label htmlFor="contact">Message</Form.Label>
                                            <Form.Control as="textarea" rows={4} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-theme">Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetQuote
