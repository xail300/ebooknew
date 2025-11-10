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
import Image from 'next/image'
import React from 'react'


const NovelWriting = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <TopContent someHeadingOne="Professional" someHeadingTwo="Writing Services" spanTitle="EBook" desc="Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries." />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="img-right">
                                <Image src="/assets/images/img-10.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}
            {/* inner one */}
            <section className="inner-sec-one">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="left">
                                <SectionTitle heading="Create Magical Stories" desc="Where innovation fuels success! Empower your business with tailor-made mobile apps designed to enhance performance, elevate user experience, and solidify your market presence. Our expertise spans industries like finance, retail, education, healthcare, and beyond." HeadingTag="h2" />
                                <Button />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="img-right">
                                <Image src="/assets/images/novel-writing-1.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}
            {/* inner two */}
            <InnerSecTwo items={innerSecTwoData.fiction} />
            {/* end */}
            {/* slider sec */}
            <SliderSec />
            {/* end */}
            {/* road map */}
            <section className="road-map">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <SectionTitle smallHeading="Roadmap" heading="THE PATH OF YOUR EBOOK" desc="A step-by-step crafted process to transform your idea into a beautifully published eBook — ready for readers, stores, and success." HeadingTag="h3" />
                        </div>
                    </div>
                    <div className="road-map-body">
                        <div className="road-map-left">
                            <MapLeftInner items={roadMapInnerData.leftInner} />
                        </div>
                        <div className="road-map-center d-md-block d-none">
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
                            <MapRightInner items={roadMapInnerData.rightInner} />
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}
            {/* inner five */}
            <section className="inner-sec-five">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <SectionTitle heading="Our collection" smallHeading="Explore our newly released NFT collection " HeadingTag="h3" />
                        </div>
                    </div>
                    <div className="inner-five-body">
                        <InnerSecFive items={innerFiveData.fiction} />
                    </div>
                </div>
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

export default NovelWriting
