import React from 'react'

const InnerSecFive = ({ items }) => {
    return (
        <>
            {
                items?.map((item, i) => (
                    <div className="inner-five-inner" key={i}>
                        <h4>{item.heading}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </>
    )
}

export default InnerSecFive
