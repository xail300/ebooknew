import React from 'react'

const InnerContent = [
    {
        smallHeading: "PHASE 1",
        title: "WRITING & EDITING",
        listOne: "Understand your story, genre, and audience",
        listTwo: "Create book outline and content structure",
        listThree: "Define your ebook goals (Amazon, Website, or Series)",
    },
    {
        smallHeading: "PHASE 2",
        title: "IDEA & STRATEGY",
        listOne: "Understand your story, genre, and audience",
        listTwo: "Create book outline and content structure",
        listThree: "Define your ebook goals (Amazon, Website, or Series)",
    }
]

const MapLeftInner = () => {
    return (
        <>
            {
                InnerContent?.map((item, index) => (
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
