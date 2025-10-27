import Image from "next/image";

export default function Home() {
  return (
    // top banner
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
    // end
  );
}
