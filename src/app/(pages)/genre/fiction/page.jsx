import Button from '@/app/_components/Button'
import Faqs from '@/app/_components/Faqs'
import FullImage from '@/app/_components/FullImage'
import GetQuote from '@/app/_components/GetQuote'
import InnerSecFive from '@/app/_components/InnerSecFive'
import InnerSecTwo from '@/app/_components/InnerSecTwo'
import MapLeftInner from '@/app/_components/MapLeftInner'
import MapRightInner from '@/app/_components/MapRightInner'
import SectionTitle from '@/app/_components/SectionTitle'
import SliderSec from '@/app/_components/SliderSec'
import TopContent from '@/app/_components/TopContent'
import { faqsContent } from '@/data/faqsContent'
import { innerFiveData } from '@/data/innerFiveData'
import { innerSecTwoData } from '@/data/innerSecTwoData'
import { roadMapInnerData } from '@/data/roadMapInnerData'
import { slideContent } from '@/data/sliderData'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const metadata = {
  title: "Fiction",
  // description: "Home",
};

const FictionPage = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={6} lg={6} md={6}>
                            <TopContent someHeadingOne="Authentic And Reliable" someHeadingTwo="of XYZ" spanTitle="Fiction Ghostwriting Services" desc="Get your fiction tale written with the bestselling authors and editors with XYZ to write your novel and meet your goal of publishing your work." />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className="img-right">
                                <Image src="/assets/images/fiction-img.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            {/* inner one */}
            <section className="inner-sec-one">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={7} lg={7} md={7}>
                            <div className="left">
                                <SectionTitle heading="Three Essential Elements of fiction book writing services" desc="The fiction book should not only be entertaining; it should also take the readers away, stir their feelings, and create a strong bond with readers. Well written stories transform fantasy into a memorable reading process." HeadingTag="h2" />
                                <Button />
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="img-right">
                                <Image src="/assets/images/fiction-1.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            {/* inner two */}
            <InnerSecTwo items={innerSecTwoData.fiction} />
            {/* end */}
            {/* slider sec */}
            <SliderSec items={slideContent.fictionPage}/>
            {/* end */}
            {/* road map */}
            <section className="road-map">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10} lg={10} md={10}>
                            <SectionTitle smallHeading="Roadmap" heading="Work Process Four Stepped Fiction Book Writing Service" desc="Our four-step plan will see you through to the finished stage with your ideas developed into a real publication that attracts the readers and makes a memorable impact." HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="road-map-body">
                        <div className="road-map-left">
                            <MapLeftInner items={roadMapInnerData.fictionLeftInner} />
                        </div>
                        <div className="road-map-center d-lg-block d-none">
                            <div className="shape">
                                <Image src="/assets/images/shape.png" alt="" width={148} height={148} />
                                <span>01</span>
                            </div>
                            <div className="center-space"></div>
                            <div className="shape">
                                <Image src="/assets/images/shape.png" alt="" width={148} height={148} />
                                <span>02</span>
                            </div>
                            <div className="center-space"></div>
                            <div className="shape">
                                <Image src="/assets/images/shape.png" alt="" width={148} height={148} />
                                <span>03</span>
                            </div>
                            <div className="center-space"></div>
                            <div className="shape">
                                <Image src="/assets/images/shape.png" alt="" width={148} height={148} />
                                <span>04</span>
                            </div>
                        </div>
                        <div className="road-map-right">
                            <MapRightInner items={roadMapInnerData.fictionRightInner} />
                        </div>
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* inner five */}
            <section className="inner-sec-five">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={8} lg={8} md={10}>
                            <SectionTitle heading="Fiction Book Writing Services" smallHeading="XYZ Site - Four Advantages of" HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="inner-five-body">
                        <InnerSecFive items={innerFiveData.fiction} />
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* full image */}
            <FullImage />
            {/* end */}
            {/* faqs */}
            <Faqs items={faqsContent.fiction} />
            {/* end */}
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default FictionPage
