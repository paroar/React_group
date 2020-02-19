import React from 'react';
import Modal from '../../Modal/Modal';
import NewListForm from './NewListForm/NewListForm';
import { FaTimes } from 'react-icons/fa';

const NewList = ({open, toggle}: any) => {

    return (
        <div>
            <Modal 
                show={open}
                modalClosed={toggle}
                modalWidth="40%"
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

