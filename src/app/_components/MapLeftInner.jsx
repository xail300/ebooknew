import React from 'react'

const MapLeftInner = ({items}) => {
    return (
        <>
            {
                items?.map((item, index) => (
                    <div className="road-map-left-inner" key={index}>
                        <span>{item.smallHeading}</span>
                        <h3>{item.title}</h3>
                        <ul>
                            <li>{item.listOne}</li>
                            <li>{item.listTwo}</li>
                            <li>{item.listThree}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    )
}

export default MapLeftInner
