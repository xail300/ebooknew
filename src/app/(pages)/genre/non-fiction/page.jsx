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
  title: "Non Fiction",
  // description: "Home",
};

const NonFictionPage = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col xl={6} lg={6} md={6}>
                            <TopContent someHeadingOne="The Real and Reliable" someHeadingTwo="by XYZ" spanTitle="Non Fiction Book Writing Services" desc="XYZ focuses on taking the actual experience, knowledge, and ideas and translating them into non-fiction works with power." />
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className="img-right">
                                <Image src="/assets/images/nonfiction-img.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
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
                                <SectionTitle heading="There are Three Important Elements of Writing Services in Non-Fiction Books that are Critical" desc="A non-fiction book must not just inform but it must be inspirational, clarifying and touching the readers. The achievement of the writing of a well-made non-fiction work is the ability to turn knowledge, experience or research to a valuable and long-lasting contribution." HeadingTag="h2" />
                                <Button />
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="img-right">
                                <Image src="/assets/images/non-fiction-1.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end */}
            {/* inner two */}
            <InnerSecTwo items={innerSecTwoData.nonFiction} />
            {/* end */}
            {/* slider sec */}
            <SliderSec items={slideContent.nonFictionPage}/>
            {/* end */}
            {/* road map */}
            <section className="road-map">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10} lg={10} md={10}>
                            <SectionTitle smallHeading="Roadmap" heading="Work Process Four Steps of Non-Fiction Book Writing Service" desc="Your ideas, research, and experiences are turned into a finished non-fiction manuscript that informs, inspires, and relates to the readers by our four-step process. We make your book readable, believable and saleable." HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="road-map-body">
                        <div className="road-map-left">
                            <MapLeftInner items={roadMapInnerData.nonFictionLeftInner} />
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
                            <MapRightInner items={roadMapInnerData.nonFictionRightInner} />
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
                            <SectionTitle heading="Non-Fiction Book Writing Services" smallHeading="XYZ Web Site - 4 Advantages to" HeadingTag="h3" />
                        </Col>
                    </Row>
                    <div className="inner-five-body">
                        <InnerSecFive items={innerFiveData.nonFiction} />
                    </div>
                </Container>
            </section>
            {/* end */}
            {/* full image */}
            <FullImage />
            {/* end */}
            {/* faqs */}
            <Faqs items={faqsContent.nonFiction} />
            {/* end */}
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default NonFictionPage
