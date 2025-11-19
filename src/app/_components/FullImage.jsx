import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

const FullImage = () => {
    return (
        <section className="full-img p-0 overflow-hidden">
            <Container fluid className="px-0">
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <div className="full-img-body">
                            <Image src="/assets/images/full-img.png" alt="" fill sizes="(max-width: 767px) 100vw" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FullImage
