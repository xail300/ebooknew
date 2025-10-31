import Image from "next/image"
import Button from "./Button"


const BannerSec = () => {
    return (
        <section className="banner-sec">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="left">
                            <h3>Looking to Create A Scalable Ebook Solution?</h3>
                            <Button />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="right">
                           <Image src="/assets/images/img-7.png" alt="" width={392} height={390}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSec
