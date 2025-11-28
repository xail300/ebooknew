import Image from "next/image"
import Button from "./Button"
import { Col, Container, Row } from "react-bootstrap"


const BannerSec = () => {
    return (
        <section className="banner-sec">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xl={6} lg={6} md={6}>
                        <div className="left">
                            <h3>Looking to Create A Scalable Ebook Solution?</h3>
                            <Button />
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <div className="right">
                            <Image src="/assets/images/img-7.png" alt="" width={392} height={390} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerSec
