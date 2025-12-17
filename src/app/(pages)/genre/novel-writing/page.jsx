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
  title: "Novel Writing",
  // description: "Home",
};

const NovelWritingPage = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={6} lg={6} md={6}>
                            <TopContent someHeadingOne="XYZ Authentic and Expert" someHeadingTwo="Services" spanTitle="Novel Writing" desc="At XYZ, we capitalize in your imaginations, ideas and creative works to come up with immersive, well-written novels." />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className="img-right">
                                <Image src="/assets/images/novel-img.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
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
                                <SectionTitle heading="Three Major Components of the Novel Writing Services" desc="A good novel is more than a story, it is a journey, a feeling and the impression that will be remembered. It is the real craft of novel writing to turn imagination, characters and themes into a story that lingers on long after the last page." HeadingTag="h2" />
                                <Button />
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="img-right">
                                <Image src="/assets/images/novel-writing-1.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            {/* inner two */}
            <InnerSecTwo items={innerSecTwoData.novelWriting} />
            {/* end */}
            {/* slider sec */}
            <SliderSec items={slideContent.novelPage}/>
            {/* end */}
            {/* road map */}
            <section className="road-map">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10} lg={10} md={10}>
                            <SectionTitle smallHeading="Roadmap" heading="Work Process - Novel Writing Service 4 Steps" desc="We make sure that your story is immersive, emotionally connecting and publication-ready." HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="road-map-body">
                        <div className="road-map-left">
                            <MapLeftInner items={roadMapInnerData.novelWritingLeftInner} />
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
                            <MapRightInner items={roadMapInnerData.novelWritingRightInner} />
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
                            <SectionTitle heading="Our New Writing Service" smallHeading="XYZ Website 4 Benefits of" HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="inner-five-body">
                        <InnerSecFive items={innerFiveData.novelWriting} />
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* full image */}
            <FullImage />
            {/* end */}
            {/* faqs */}
            <Faqs items={faqsContent.novelWriting} />
            {/* end */}
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default NovelWritingPage
