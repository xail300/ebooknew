import GetQuote from '@/app/_components/GetQuote'
import TopContent from '@/app/_components/TopContent'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';

export const metadata = {
    title: "Contact Us",
    // description: "Home",
};

const Contact = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={6} lg={6} md={6}>
                            <TopContent someHeadingOne="Contact" someHeadingTwo="" spanTitle="Us" desc="Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries." />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className="img-right">
                                <Image src="/assets/images/img-12.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            <div style={{ height: '80px' }}></div>
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default Contact
