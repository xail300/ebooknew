import Image from "next/image"

const FullImage = () => {
    return (
        <section className="full-img p-0 overflow-hidden">
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="full-img-body">
                            <Image src="/assets/images/full-img.png" alt="" fill sizes="(max-width: 767px) 100vw" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullImage
