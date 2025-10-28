import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* top banner */}
      <section className="top-banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="center-col">
                <h1>Professional <span>EBook</span> Writing Services</h1>
                <p className="mb-4">Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries.</p>
                <button className="btn btn-theme">Get Started </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6">
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
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="center text-center">
                <Image src="/assets/images/img-2.png" alt="" width={491} height={535} />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
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
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* sec one */}
      <section className="sec-one overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="section-title">
                <span>features</span>
                <h2>Lorem ipsum dolor sit amet, consec elit, </h2>
              </div>
            </div>
          </div>
          <div className="sec-one-body">
            <div className="sec-one-inner">
              <Image src="/assets/images/img-3.png" alt="" width={497} height={552} />
              <div className="overflow-sec">
                <div className="mb-0">
                  <span>Books cover</span>
                </div>
                <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
              </div>
            </div>
            <div className="sec-one-inner">
              <Image src="/assets/images/img-4.png" alt="" width={487} height={543} />
              <div className="overflow-sec-one">
                <div className="mb-0">
                  <span>Author website</span>
                </div>
                <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
              </div>
            </div>
            <div className="sec-one-inner">
              <Image src="/assets/images/img-5.png" alt="" width={478} height={536} />
              <div className="overflow-sec-two">
                <div className="mb-0">
                  <span>illustration</span>
                </div>
                <Image src="/assets/images/circle-img.png" alt="" width={62} height={62} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* sec two */}
      <section className="sec-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="section-title">
                <span>features</span>
                <h3>UNLOCK THE POWER OF YOUR STORY</h3>
                <p>A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
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
                <div className="text-center mt-5">
                  <Image src="/assets/images/img-6.png" alt="" width={454} height={341} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="sec-two-inner">
                <h3>DIGITAL DESIGN & VISUAL REWARDS</h3>
                <p>Your story deserves to look as good as it reads. Our expert designers create stunning, scroll-stopping layouts </p>
                <div className="sec-two-box">
                  <div className="sec-two-inner-box">
                    <h4>What You Get:</h4>
                    <ul>
                      <li>Interactive Page Elements</li>
                      <li>Engaging Typography</li>
                      <li>Device-Responsive Layouts</li>
                    </ul>
                    <p>From scattered sparks to sharp results.</p>
                  </div>
                  <Link href="/">Contact us</Link>
                </div>
              </div>
              <div className="sec-two-inner">
                <h3>READY TO PUBLISH YOUR MASTERPIECE?</h3>
                <p>Start your journey with professional eBook design and unlock access to premium creative services and a community that values your vision.</p>
                <button className="btn btn-theme">Get Started </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
    </>
  );
}
