import Button from '@/app/_components/Button'
import Faqs from '@/app/_components/Faqs'
import FullImage from '@/app/_components/FullImage'
import GetQuote from '@/app/_components/GetQuote'
import InnerSecFive from '@/app/_components/InnerSecFive'
import InnerSecTwo from '@/app/_components/InnerSecTwo'
import MapLeftInner from '@/app/_components/MapLeftInner'
import MapRightInner from '@/app/_components/MapRightInner'
import SectionTitle from '@/app/_components/SectionTitle'
import TopContent from '@/app/_components/TopContent'
import { faqsContent } from '@/data/faqsContent'
import { innerFiveData } from '@/data/innerFiveData'
import { innerSecTwoData } from '@/data/innerSecTwoData'
import { roadMapInnerData } from '@/data/roadMapInnerData'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const metadata = {
  title: "eBook Editing",
  // description: "Home",
};

const EbookEditingPage = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={6} lg={6} md={6}>
                            <TopContent someHeadingOne="Professional" someHeadingTwo="Polish Your Content" spanTitle="Editing Services" desc="Our professional editors will make sure that your eBook glows in its perfect error-free content. We should be employed to read smoothly." />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className="img-right">
                                <Image src="/assets/images/ebook-editing-img.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
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
                                <SectionTitle heading="Three Significant characteristics of eBook Editing Services" desc="Revising an eBook plays an important role towards making sure that your ideas, stories and knowledge have been represented in the most professional and readable manner. Even the most powerful manuscripts may fail to be as good as they can without professional editorial advice." HeadingTag="h2" />
                                <Button />
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="img-right w-100">
                                <Image src="/assets/images/ebook-editing-1.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            {/* inner two */}
            <InnerSecTwo items={innerSecTwoData.eBookEditing} />
            {/* end */}
            {/* road map */}
            <section className="road-map">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10} lg={10} md={10}>
                            <SectionTitle smallHeading="Roadmap" heading="eBook Editing Service Work Process in 4 Steps" desc="Our editing procedure is a four-step process that transforms a manuscript by an author into a professional, polished, and marketable eBook. Our work can be refined to industry standards, remedied through collective editing, and is made clear, consistent and compelling through attention to detail." HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="road-map-body">
                        <div className="road-map-left">
                            <MapLeftInner items={roadMapInnerData.eBookEditingLeftInner} />
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
                            <MapRightInner items={roadMapInnerData.eBookEditingRightInner} />
                        </div>
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* inner five */}
            <section className="inner-sec-five">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10} lg={10} md={10}>
                            <SectionTitle heading="eBook Editing Services Offered by XYZ Site" smallHeading="There are Four Benefits of " HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="inner-five-body">
                        <InnerSecFive items={innerFiveData.eBookEditing} />
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* full image */}
            <FullImage />
            {/* end */}
            {/* faqs */}
            <Faqs items={faqsContent.eBookEditing} />
            {/* end */}
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default EbookEditingPage 
