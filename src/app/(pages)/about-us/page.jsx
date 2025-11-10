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

export const metadata = {
  title: "About Us",
  // description: "Home",
};

const About = () => {
  return (
    <>
      {/* top banner */}
      <section className="top-banner inner-pages">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <TopContent someHeadingOne="About" someHeadingTwo="" spanTitle="US" desc="Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries." />
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
                <Image src="/assets/images/img-11.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* inner two */}
      <InnerSecTwo items={innerSecTwoData.about} />
      {/* end */}
      {/* meet sec */}
      <section className="meet-sec">
        <div className="container">
          <div className="meet-sec-bg">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <SectionTitle heading="Meet Our Featured Authors - Discover Their Stories" HeadingTag="h3" />
              </div>
            </div>
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
            <InnerSecFive items={innerFiveData.about}/>
          </div>
        </div>
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
