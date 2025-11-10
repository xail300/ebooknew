'use client'
import { Accordion } from "react-bootstrap"
import SectionTitle from "./SectionTitle"

const Faqs = ({items}) => {
    return (
        <section className="question-answer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10">
                        <SectionTitle smallHeading="FAQ" heading="THE PATH OF YOUR EBOOK" desc="A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value." HeadingTag="h3" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="qa-sec">
                            <Accordion defaultActiveKey="0">
                                {
                                    items?.map((content, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>{content.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <p>{content.desc}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
