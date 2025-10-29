'use client'
import { Accordion } from "react-bootstrap"
import SectionTitle from "./SectionTitle"

const faqContent = [
    {
        title: 'What industries does Optimo serve?',
        desc: 'It starts with a conversation. During an initial consultation, we’ll learn about your goals, challenges, and opportunities, then recommend services— whether that’s growth planning, talent strategy, or performance optimization —best aligned to your needs.'
    },
    {
        title: 'How do I know which service is right for my business?',
        desc: 'It starts with a conversation. During an initial consultation, we’ll learn about your goals, challenges, and opportunities, then recommend services— whether that’s growth planning, talent strategy, or performance optimization —best aligned to your needs.'
    },
    {
        title: 'Do you offer customized solutions or standard frameworks?',
        desc: 'It starts with a conversation. During an initial consultation, we’ll learn about your goals, challenges, and opportunities, then recommend services— whether that’s growth planning, talent strategy, or performance optimization —best aligned to your needs.'
    },
    {
        title: 'How do you measure success with clients?',
        desc: 'It starts with a conversation. During an initial consultation, we’ll learn about your goals, challenges, and opportunities, then recommend services— whether that’s growth planning, talent strategy, or performance optimization —best aligned to your needs.'
    },
    {
        title: 'How can I get started with Optimo?',
        desc: 'It starts with a conversation. During an initial consultation, we’ll learn about your goals, challenges, and opportunities, then recommend services— whether that’s growth planning, talent strategy, or performance optimization —best aligned to your needs.'
    },
]

const Faqs = () => {
    return (
        <section className="question-answer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10">
                        <SectionTitle smallHeading="FAQ" heading="THE PATH OF YOUR EBOOK" desc="A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value." HeadingTag="h3" />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="qa-sec">
                            <Accordion defaultActiveKey="0">
                                {
                                    faqContent?.map((content, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={index}>
                                            <Accordion.Header>{content.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <p>{content.desc}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
