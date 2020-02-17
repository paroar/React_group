import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const CarouselItemDetails = ({onClick}: any) => {
    return (
        <button onClick={onClick} className="carousel-details">
            <span>
                <FaArrowDown />
            </span>
        </button>
    )
}

export default CarouselItemDetails;