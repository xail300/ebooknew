import React from 'react'

const SectionTitle = ({ smallHeading, heading, desc, HeadingTag = 'h2' }) => {
    return (
        <div className="section-title">
            {smallHeading && <span>{smallHeading}</span>}
            {heading && <HeadingTag>{heading}</HeadingTag>}
            {desc && <p>{desc}</p>}
        </div>
    )
}

export default SectionTitle
