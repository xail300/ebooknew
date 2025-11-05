import GetQuote from '@/app/_components/GetQuote'
import TopContent from '@/app/_components/TopContent'
import Image from 'next/image'

export const metadata = {
    title: "Contact Us",
    // description: "Home",
};

const Contact = () => {
    return (
        <>
            {/* top banner */}
            <section className="top-banner inner-pages">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <TopContent someHeadingOne="Contact" someHeadingTwo="" spanTitle="Us" desc="Avail the best ghost-writing services from our affordable self-publishing ghostwriting agency. We are experts in creating fiction, non-fiction, mysteries." />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="img-right">
                                <Image src="/assets/images/img-12.png" alt="" fill sizes="(max-width: 767px) 100vw"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}
            <div style={{ height: '80px' }}></div>
            {/* get quote */}
            <GetQuote />
            {/* end */}
        </>
    )
}

export default Contact
