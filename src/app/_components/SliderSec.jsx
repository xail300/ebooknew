'use client'
import React from 'react'
import SectionTitle from './SectionTitle'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { Col, Container, Row } from 'react-bootstrap';

const SliderSec = ({items}) => {

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
            <Container>
                <Row className="justify-content-center">
                    <Col xl={10} lg={10} md={10}>
                        <SectionTitle heading="Our Website Are Professionally Published" desc="With an experienced staff, our company has been helping clients to publish book they always wanted" HeadingTag="h3" />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center mt-4">
                    <div className="slider-inner">
                        <Slider {...settings}>
                            {items?.map((item, i) => (
                                <div className="slider-box" key={i}>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Row>
                <Row>
                    <div className="bottom-bg"></div>
                </Row>
            </Container>
        </section>
    )
}

export default SliderSec
