import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import NewListForm from './NewListForm/NewListForm';
import { FaTimes } from 'react-icons/fa';

const NewList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleOpen}>+</button>

            <Modal 
                show={isOpen}
                modalClosed={toggleOpen}
                modalWidth="40%"
                modalLeft="50%"
            >
                <div className="close" onClick={toggleOpen}>
                    <FaTimes size="2rem" />
                </div>
                <NewListForm />
            </Modal>
        </div>
    )
}

export default NewList;