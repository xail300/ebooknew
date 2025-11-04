import React from 'react'

const InnerContent = [
    {
        smallHeading: "Phase 3",
        title: "FORMATTING",
        listOne: "Understand your story, genre, and audience",
        listTwo: "Create book outline and content structure",
        listThree: "Define your ebook goals (Amazon, Website, or Series)",
    },
    {
        smallHeading: "Phase 4",
        title: "PUBLISH & PROMOTE",
        listOne: "Understand your story, genre, and audience",
        listTwo: "Create book outline and content structure",
        listThree: "Define your ebook goals (Amazon, Website, or Series)",
    }
]

const MapRightInner = () => {
    return (
        <>
            {
                InnerContent?.map((item, index) => (
                    <div className="road-map-right-inner" key={index}>
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

export default MapRightInner
