'use client'
import { Accordion, Col, Container, Row } from "react-bootstrap"
import SectionTitle from "./SectionTitle"

const Faqs = ({ items }) => {
    return (
        <section className="question-answer">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} lg={8} md={10}>
                        <SectionTitle smallHeading="FAQs" heading="Frequently Asked Questions" desc="Some of the most frequent questions that a client poses are answered below." HeadingTag="h3" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xl={12} lg={12} md={12}>
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faqs
