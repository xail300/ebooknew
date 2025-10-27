// import { sendMail } from '@/lib/sendEmail';
import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

const CustomModal = ({ show, modalClose }) => {

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
        const formData = new FormData(form);
        // await sendMail(formData);
        // end
    };

    return (
        <>
            <Modal show={show} onHide={modalClose}>
                <Modal.Body>
                    <div className="model-discount">
                        <div className="d-block text-center align-items-center">
                            <div className="animate-div"><span>Sign Up And Avail 50% Discount</span></div>
                            <button type="button" onClick={modalClose} className="btn-close" aria-label="Close"></button>
                        </div>
                        <hr />
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control className="model-input" required type="text" id="name" name='name' placeholder="Enter Name*" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control className="model-input" required type="email" id="email" name='email' placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="contact">Contact No.</Form.Label>
                                        <Form.Control className="model-input" type="number" id="contact" name="phone" placeholder="Enter Phone Number*" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="service">Service</Form.Label>
                                        <Form.Select className="model-input" name="service" id="service" defaultValue="" required>
                                            <option value="" disabled>Select Service</option>
                                            <option value="Publication Support">Publication Support</option>
                                            <option value="Journal Selection">Journal Selection</option>
                                            <option value="Pre-Submission Review">Pre-Submission Review</option>
                                            <option value="Formatting And Artwork Editing">Formatting And Artwork Editing</option>
                                            <option value="Journal Submission">Journal Submission</option>
                                            <option value="Resubmission Support">Resubmission Support</option>
                                            <option value="Plagiarism Check">Plagiarism Check</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-0">
                                        <button className="btn btn-theme-dark">Submit <span><i className="ri-arrow-right-up-line"></i></span></button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default CustomModal