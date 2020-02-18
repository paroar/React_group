import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import NewListForm from './NewListForm/NewListForm';
import { FaTimes } from 'react-icons/fa';

const NewList = ({isOpen, toggle}: any) => {

    return (
        <div>
            <Modal 
                show={isOpen}
                modalClosed={toggle}
                modalWidth="40%"
                modalLeft="50%"
            >
                <div className="close" onClick={() => toggle}>
                    <FaTimes size="2rem" />
                </div>
                <NewListForm />
            </Modal>
        </div>
    )
}

export default NewList;