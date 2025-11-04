import React from 'react'
import Button from './Button'

const TopContent = ({ someHeadingOne, someHeadingTwo, spanTitle, desc }) => {
    return (
        <div className="center-col">
            <h1>{someHeadingOne} <span>{spanTitle}</span> {someHeadingTwo}</h1>
            {desc && <p className="mb-4">{desc}</p>}
            <Button />
        </div>
    )
}

export default TopContent
