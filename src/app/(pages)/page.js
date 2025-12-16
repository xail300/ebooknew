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
            <Col xl={8} lg={8} md={12}>
              <TopContent someHeadingOne="Hire Our Expert" someHeadingTwo="to Craft Compelling eBooks" spanTitle="Ebook Writers" desc="Let us handle the task for you. Our skills, creativity and years of experience in writing ebooks will be used to design quality content on your behalf." />
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col xl={3} lg={4} md={4}>
              <div className="left">
                <Image src="/assets/images/img-1.png" alt="" width={299} height={351} />
                <div className="overflow-sec">
                  <div className="mb-0">
                    <p>Rarity Score:</p>
                    <span>8.7/10</span>
                  </div>
                  <Image src="/assets/images/circle-img.png" alt="" width={42} height={62} />
                </div>
              </div>
            </Col>
            <Col xl={5} lg={4} md={4}>
              <div className="center text-center">
                <Image src="/assets/images/img-2.png" alt="" fill sizes="(max-width: 767px) 100vw" />
              </div>
            </Col>
            <Col xl={3} lg={4} md={4}>
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
              <SectionTitle smallHeading="Expertise On Peak" heading="Below Is Presented Some Of Our Expert Level Work" />
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
              <SectionTitle smallHeading="features" heading="Unleash Your Story With Our Ebook Writing Services" desc="Turn your imagination into compelling words with the assistance of our expert ebook writers" HeadingTag="h3" />
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className="sec-two-inner">
                <h3>Professional Ebook Services That We Offer</h3>
                <p>Below are given some of our expertly crafted ebook services that makes your ebook attention grabbing and readable for the audience.</p>
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
                <h3>We Let One Of The Most Successful eBook Ghostwriters Work On Your eBook Projects</h3>
                <p>We have also worked with hundreds of authors who had problems with self-publishing their ebooks before approaching us.</p>
                <div className="sec-sub-inner mt-5">
                  <Image src="/assets/images/img-6.png" alt="" fill sizes="(max-width: 767px) 100vw" />
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="sec-two-inner">
                <h3>We Are Hired With A Team Of Highly Professional Ebook Writers</h3>
                <p>At XYZ firm, we have a team of expert ebook writers who have excessive years of experience in writing ebooks. Our writers offer multiple benefits such as:</p>
                <div className="sec-two-box">
                  <div className="pattern-one"><Image src="/assets/images/pattern-1.png" alt="" width={104} height={104} /></div>
                  <div className="pattern-two"><Image src="/assets/images/pattern-2.png" alt="" width={98} height={98} /></div>
                  <div className="pattern-three"><Image src="/assets/images/pattern-3.png" alt="" width={82} height={82} /></div>
                  <div className="sec-two-inner-box">
                    <span>What You Get:</span>
                    <ul>
                      <li><i className="ri-checkbox-line"></i> Compelling Stories</li>
                      <li><i className="ri-checkbox-line"></i> Over years of expertise</li>
                      <li><i className="ri-checkbox-line"></i> 24/7 Co-ordination</li>
                    </ul>
                  </div>
                  <div className="btn-contact">
                    <Link href="/contact-us"><span><i className="ri-add-large-line"></i> Contact us</span></Link>
                  </div>
                </div>
              </div>
              <div className="sec-two-inner">
                <h3>The Strengths of Our Platform</h3>
                <p>We are the right provider of your writing needs in the form of book-writing. Do not miss a chance to employ one of our professional writers of books who will help to make your views come alive.</p>
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
              <SectionTitle smallHeading="Why Experience Matters?" heading="Here Is Our Authentic Work Procedure" desc="To make you understand more properly we have categorized the steps of our professional work process that makes your ebooks stand out." HeadingTag="h3" />
            </Col>
          </Row>
          <div className="bg-image">
            <Row className="justify-content-center">
              <Col xl={3} lg={3} md={3}>
                <div className="left">
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Consultation</span>
                  </div>
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Planning Strategically</span>
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
                    <span>Completing</span>
                  </div>
                  <div className="sec-three-inner">
                    <Image src="/assets/images/img-8.png" alt="" width={331} height={331} />
                    <span>Start the Plan</span>
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
            <Col xl={6} lg={6} md={6}>
              <SectionTitle smallHeading="Service" heading="eBook Services That We Offer" HeadingTag="h3" />
            </Col>
            <Col xl={6} lg={6} md={6}>
              <SectionTitle desc="Our widely popular ebook service’s firm offers various top grade ebook writing services that has aided multiple publishers and authors in crafting some of the most amazing ebooks." />
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
            <Col xl={10} lg={10} md={10}>
              <SectionTitle smallHeading="Roadmap" heading="Four Characteristics of eBook Writing Services" desc="These services combine creativity, technical and industry expertise and knowledge to make your eBook be noticed in a competitive market place." HeadingTag="h3" />
            </Col>
          </Row>
          <div className="road-map-body">
            <div className="road-map-left">
              <MapLeftInner items={roadMapInnerData.leftInner} />
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
