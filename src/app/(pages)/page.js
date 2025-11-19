import Image from "next/image";
import Link from "next/link";
import BannerSec from "../_components/BannerSec";
import SectionTitle from "../_components/SectionTitle";
import { services } from "../../data/servicesData";
import Faqs from "../_components/Faqs";
import GetQuote from "../_components/GetQuote";
import MapLeftInner from "../_components/MapLeftInner";
import MapRightInner from "../_components/MapRightInner";
import Button from "../_components/Button";
import FullImage from "../_components/FullImage";
import TopContent from "../_components/TopContent";
import { roadMapInnerData } from "@/data/roadMapInnerData";
import { faqsContent } from "@/data/faqsContent";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Home",
  // description: "Home",
};

export default function Home() {

  return (
    <>
      {/* top banner */}
      <section className="top-banner">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xl={6} lg={6} md={12}>
              <TopContent someHeadingOne="Professional" someHeadingTwo="Writing Services" spanTitle="EBook" desc="Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries." />
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col xl={3} lg={3} md={6}>
              <div className="left">
                <Image src="/assets/images/img-1.png" alt="" width={299} height={351} />
                <div className="overflow-sec">
                  <div className="mb-0">
                    <p>Rarity Score:</p>
                    <span>8.7/10</span>
                  </div>
                  <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
                </div>
              </div>
            </Col>
            <Col xl={5} lg={5} md={6}>
              <div className="center text-center">
                <Image src="/assets/images/img-2.png" alt="" fill sizes="(max-width: 767px) 100vw" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className="right">
                <div className="number">
                  <span>500+</span>
                  <p>Books Created For Clients</p>
                </div>
                <div className="number">
                  <span>500+</span>
                  <p>Books Created For Clients</p>
                </div>
                <div className="number mb-0">
                  <span>500+</span>
                  <p>Books Created For Clients</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* sec one */}
      <section className="sec-one overflow-hidden">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={10}>
              <SectionTitle smallHeading="features" heading="Lorem ipsum dolor sit amet, consec elit," />
            </Col>
          </Row>
          <div className="sec-one-body">
            <div className="sec-one-inner">
              <Image src="/assets/images/img-3.png" alt="" width={497} height={552} />
              <div className="overflow-sec">
                <div className="overflow-sec-inner">
                  <div className="mb-0">
                    <span>Books cover</span>
                  </div>
                  <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
                </div>
              </div>
            </div>
            <div className="sec-one-inner">
              <Image src="/assets/images/img-4.png" alt="" width={487} height={543} />
              <div className="overflow-sec-one">
                <div className="overflow-sec-inner">
                  <div className="mb-0">
                    <span>Author website</span>
                  </div>
                  <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
                </div>
              </div>
            </div>
            <div className="sec-one-inner">
              <Image src="/assets/images/img-5.png" alt="" width={478} height={536} />
              <div className="overflow-sec-two">
                <div className="overflow-sec-inner">
                  <div className="mb-0">
                    <span>illustration</span>
                  </div>
                  <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* end */}
      {/* sec two */}
      <section className="sec-two">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={10}>
              <SectionTitle smallHeading="features" heading="UNLOCK THE POWER OF YOUR STORY" desc="A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value." HeadingTag="h3" />
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className="sec-two-inner">
                <h3>PROFESSIONAL EBOOK CREATION</h3>
                <p>Every eBook is crafted to perfection — blending storytelling, visuals, and strategy for maximum impact. </p>
                <div className="sec-two-sub-inner">
                  <span>eBook Writing</span>
                  <span>Editing</span>
                  <span>Layout</span>
                  <span>Formatting</span>
                  <span>Creative Cover Design</span>
                  <span>PDF</span>
                  <span>Kindle Versions</span>
                  <span>Visual</span>
                  <span>Illustrations</span>
                  <span>Storytelling</span>
                  <span>Proofreading</span>
                  <span>Print-Ready Files</span>
                </div>
              </div>
              <div className="sec-two-inner">
                <h3>AUTHOR  & COLLABORATION HUB</h3>
                <p>Join a growing network of writers, creators, and digital publishers.</p>
                <div className="sec-sub-inner mt-5">
                  <Image src="/assets/images/img-6.png" alt="" fill sizes="(max-width: 767px) 100vw" />
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="sec-two-inner">
                <h3>DIGITAL DESIGN & VISUAL REWARDS</h3>
                <p>Your story deserves to look as good as it reads. Our expert designers create stunning, scroll-stopping layouts </p>
                <div className="sec-two-box">
                  <div className="pattern-one"><Image src="/assets/images/pattern-1.png" alt="" width={104} height={104} /></div>
                  <div className="pattern-two"><Image src="/assets/images/pattern-2.png" alt="" width={98} height={98} /></div>
                  <div className="pattern-three"><Image src="/assets/images/pattern-3.png" alt="" width={82} height={82} /></div>
                  <div className="sec-two-inner-box">
                    <span>What You Get:</span>
                    <ul>
                      <li><i className="ri-checkbox-line"></i> Interactive Page Elements</li>
                      <li><i className="ri-checkbox-line"></i> Engaging Typography</li>
                      <li><i className="ri-checkbox-line"></i> Device-Responsive Layouts</li>
                    </ul>
                    <p className="mb-0">From scattered sparks to sharp results.</p>
                  </div>
                  <div className="btn-contact">
                    <Link href="/contact-us"><span><i className="ri-add-large-line"></i> Contact us</span></Link>
                  </div>
                </div>
              </div>
              <div className="sec-two-inner">
                <h3>READY TO PUBLISH YOUR MASTERPIECE?</h3>
                <p>Start your journey with professional eBook design and unlock access to premium creative services and a community that values your vision.</p>
                <Button />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* banner sec */}
      <BannerSec />
      {/* end */}
      {/* sec three */}
      <section className="sec-three">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={10}>
              <SectionTitle smallHeading="EBOOK EXPERIENCE" heading="THE DIGITAL STORY" desc="A design-driven ecosystem built for authors, creators, and entrepreneurs — focused on storytelling, creativity, and long-term brand growth." HeadingTag="h3" />
            </Col>
          </Row>
          <div className="bg-image">
            <Row className="justify-content-center">
              <Col xl={3} lg={3} md={3}>
                <div className="left">
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Unique Visual Direction</span>
                  </div>
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Device-Optimized Reading Experience</span>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4}>
                <div className="center">
                  <Image src="/assets/images/mobile-img.png" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" />
                </div>
              </Col>
              <Col xl={3} lg={3} md={3}>
                <div className="right">
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Interactive Layout Design</span>
                  </div>
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Custom Brand Elements</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* end */}
      {/* service sec */}
      <section className="service-sec">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xl={5} lg={5} md={5}>
              <SectionTitle smallHeading="Service" heading="Solution we provide" HeadingTag="h3" />
            </Col>
            <Col xl={6} lg={6} md={6}>
              <SectionTitle desc="Our team of hardworking individuals has always strived for perfection. We have helped many writers and authors to date to publish their masterpieces, edit their manusciripts for perfection" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mt-md-5 mt-0">
            <Col xl={4} lg={4} md={4}>
              <div className="left">
                <Image src="/assets/images/img-9.png" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="right">
                {
                  services?.map((items, i) => (
                    <div className="service-right-inner" key={i}>
                      <div className="d-flex gap-3 align-items-center">
                        <span>{items.id}</span>
                        <Link href={items.link}>{items.title}</Link>
                      </div>
                      <i className="ri-arrow-right-up-long-line"></i>
                    </div>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* road map */}
      <section className="road-map">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={10}>
              <SectionTitle smallHeading="Roadmap" heading="THE PATH OF YOUR EBOOK" desc="A step-by-step crafted process to transform your idea into a beautifully published eBook — ready for readers, stores, and success." HeadingTag="h3" />
            </Col>
          </Row>
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
        </Container>
      </section>
      {/* end */}
      {/* full image */}
      <FullImage />
      {/* end */}
      {/* faqs */}
      <Faqs items={faqsContent.home} />
      {/* end */}
      {/* get quote */}
      <GetQuote />
      {/* end */}
    </>

  );
}
