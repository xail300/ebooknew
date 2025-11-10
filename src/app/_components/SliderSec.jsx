'use client'
import React from 'react'
import SectionTitle from './SectionTitle'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const slideContent = [
    { image: '/assets/images/slider-img-1.png' },
    { image: '/assets/images/slider-img-2.png' },
    { image: '/assets/images/slider-img-3.png' },
    { image: '/assets/images/slider-img-4.png' },
    { image: '/assets/images/slider-img-5.png' },
    { image: '/assets/images/slider-img-3.png' },
]

const SliderSec = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className="slider-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10 col-md-10">
                        <SectionTitle heading="Our Website Are Professionally Published" desc="With an experienced staff, our company has been helping clients to publish book they always wanted" HeadingTag="h3" />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="slider-inner">
                        <Slider {...settings}>
                            {slideContent.map((item, i) => (
                                <div className="slider-box" key={i}>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="bottom-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default SliderSec
