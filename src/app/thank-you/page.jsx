import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap'

const ThankYouPage = () => {
  return (
    <>
      {/* top banner */}
      <section className="top-banner inner-pages">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xl={8} lg={8} md={8}>
              <div className="center-col text-center">
                <h1>Thank you for <span>submitting!</span> </h1>
                <p className='mb-4'>our message has been sent. Our team will contact you within 24–48 hours.</p>
                <Link href="/" className="btn btn-theme">Back to Home</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
    </>
  )
}

export default ThankYouPage
