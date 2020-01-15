import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import MovieReviewForm from './MovieReviewForm/MovieReviewForm';
import { FaTimes } from 'react-icons/fa';

const MovieReview = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ButtonComponent
                action="Create new list"
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
                <MovieReviewForm />
            </Modal>
        </>
    )
}

export default MovieReview;