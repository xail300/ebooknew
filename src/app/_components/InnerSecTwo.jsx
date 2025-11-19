import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const InnerSecTwo = ({ items }) => {
    return (
        <section className="inner-sec-two">
            <Container>
                <Row className="g-3">
                    {
                        items?.map((item, i) => (
                            <Col xl={4} lg={4} md={4} key={i}>
                                <div className="sec-two-box">
                                    <Image src={item.image} alt={item.title} width={100} height={100}></Image>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default InnerSecTwo
