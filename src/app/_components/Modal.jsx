// import { sendMail } from '@/lib/sendEmail';
import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useModal } from '../context/ModalContext';


const CustomModal = () => {
    // modal context
    const { showModal, modalClose } = useModal();
    // end

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
            <Modal show={showModal} onHide={modalClose} className='model-sec'>
                <Modal.Body>
                    <div className="model-discount">
                        <div className="d-block text-center align-items-center">
                            <div className="animate-div"><span>Get a Customised Quote – Save 50% Today!</span></div>
                            <button type="button" onClick={modalClose} className="btn-close" aria-label="Close"></button>
                        </div>
                        <hr />
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control required type="text" id="name" name='name' placeholder="Enter Name*" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control required type="email" id="email" name='email' placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="contact">Contact No.</Form.Label>
                                        <Form.Control type="number" id="contact" name="phone" placeholder="Enter Phone Number*" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="service">Service</Form.Label>
                                        <Form.Select name="service" id="service" defaultValue="">
                                            <option value="" disabled>Select Service</option>
                                            <option value="eBook Writing">eBook Writing</option>
                                            <option value="eBook Editing">eBook Editing</option>
                                            <option value="eBook Marketing">eBook Marketing</option>
                                            <option value="eBook Publishing">eBook Publishing</option>
                                            <option value="eBook Cover">eBook Cover</option>
                                            <option value="Children Book">Children Book</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="service">Genre</Form.Label>
                                        <Form.Select name="service" id="service" defaultValue="">
                                            <option value="" disabled>Select a Genre</option>
                                            <option value="Autobiography">Autobiography</option>
                                            <option value="Business">Business</option>
                                            <option value="Fiction">Fiction</option>
                                            <option value="Mystery Book">Mystery Book</option>
                                            <option value="Non-Fiction">Non-Fiction</option>
                                            <option value="Novel Writing">Novel Writing</option>
                                            <option value="Self Help">Self Help</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <Form.Label htmlFor="message">Message</Form.Label>
                                        <Form.Control as="textarea" id='message' rows={4} placeholder='Message' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-0">
                                        <button className="btn btn-theme">Submit</button>
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