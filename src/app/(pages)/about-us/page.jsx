import Button from '@/app/_components/Button'
import Faqs from '@/app/_components/Faqs'
import FullImage from '@/app/_components/FullImage'
import GetQuote from '@/app/_components/GetQuote'
import InnerSecFive from '@/app/_components/InnerSecFive'
import InnerSecTwo from '@/app/_components/InnerSecTwo'
import SectionTitle from '@/app/_components/SectionTitle'
import TopContent from '@/app/_components/TopContent'
import { faqsContent } from '@/data/faqsContent'
import { innerFiveData } from '@/data/innerFiveData'
import { innerSecTwoData } from '@/data/innerSecTwoData'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

export const metadata = {
  title: "About Us",
  // description: "Home",
};

const About = () => {
  return (
    <>
      {/* top banner */}
      <section className="top-banner inner-pages">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xl={6} lg={6} md={6}>
              <TopContent someHeadingOne="About" someHeadingTwo="" spanTitle="US" desc="Let us do the work for you. We will create high-quality content for you using our abilities, imagination, and years of ebook writing experience." />
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="img-right">
                <Image src="/assets/images/img-10.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
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
                <SectionTitle heading="Three Crucial Characteristics of eBook Writing Services" desc="Creating an eBook is an influential method of exchanging your knowledge, ideas or even stories with the rest of the world. Nonetheless, this might not be an easy process especially without the relevant professional expertise. Three major characteristics of these services make them very valuable as discussed below." HeadingTag="h2" />
                <Button />
              </div>
            </Col>
            <Col xl={5} lg={5} md={5}>
              <div className="img-right">
                <Image src="/assets/images/img-11.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* inner two */}
      <InnerSecTwo items={innerSecTwoData.about} />
      {/* end */}
      {/* meet sec */}
      <section className="meet-sec">
        <Container>
          <div className="meet-sec-bg">
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={10}>
                <SectionTitle heading="Get to Know Our Featured Writers and Learn About Their Stories" HeadingTag="h3" />
              </Col>
            </Row>
            <div className="meet-sec-body">
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-1.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-2.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-3.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-4.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-5.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-6.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-7.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-8.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
              <div className="meet-sec-inner">
                <Image src="/assets/images/team-9.png" alt="" width={109} height={109}></Image>
                <span>James </span>
              </div>
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
              <SectionTitle heading="eBook Writing Services in Four Steps" smallHeading="Work Process of Our" HeadingTag="h3" />
            </Col>
          </Row>
          <div className="inner-five-body">
            <InnerSecFive items={innerFiveData.about} />
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
  )
}

export default About
