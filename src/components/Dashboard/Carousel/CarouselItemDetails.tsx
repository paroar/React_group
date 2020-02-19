import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CarouselItemDetails = ({onClick}: any) => {
    return (
        <button onClick={onClick} className="carousel-details">
            <span>
                <FaChevronDown />
            </span>
        </button>
    )
}

export default CarouselItemDetails;