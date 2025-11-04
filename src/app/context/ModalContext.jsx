'use client'
import { createContext, useContext, useState } from "react";
import CustomModal from "@/app/_components/Modal";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);


export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const modalShow = () => setShowModal(true);
    const modalClose = () => setShowModal(false);

    return (
        <ModalContext.Provider value={{ showModal, modalShow, modalClose }}>
            {children}
            <CustomModal />
        </ModalContext.Provider>
    )
}


