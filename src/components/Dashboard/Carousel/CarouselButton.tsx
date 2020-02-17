import React, { FunctionComponent } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type CarouselButtonProps = {
    clicked?: any,
    type?: string
}

const CarouselButton: FunctionComponent<CarouselButtonProps> = (props) => {
    return (
        <button className={`carousel-button carousel-button-${props.type}`} onClick={props.clicked}>
            <span>
                <FaChevronDown />
            </span>
        </button>
    )
}

export default CarouselButton;