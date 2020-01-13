import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import NewListForm from './MovieReviewForm/MovieReviewForm';
import { FaTimes } from 'react-icons/fa';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';

const MovieReview = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <ButtonComponent
                action="Review Movie"
                class="btn movie-review-btn"
                onClick={toggleOpen}
            />

            <Modal 
                show={isOpen}
                modalClosed={toggleOpen}
                modalWidth="90%"
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

export default MovieReview;