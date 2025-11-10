import Image from 'next/image'
import React from 'react'

const InnerSecTwo = ({ items }) => {
    return (
        <section className="inner-sec-two">
            <div className="container">
                <div className="row g-3">
                    {
                        items?.map((item, i) => (
                            <div className="col-xl-4 col-lg-4 col-md-4" key={i}>
                                <div className="sec-two-box">
                                    <Image src={item.image} alt={item.title} width={100} height={100}></Image>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default InnerSecTwo
