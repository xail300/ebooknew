'use client'
import React from 'react'
import { useModal } from '../context/ModalContext'

const Button = () => {

    const { modalShow } = useModal();

    return (
        <button className="btn btn-theme" onClick={modalShow}>Get Started </button>
    )
}

export default Button
