import React, { FunctionComponent } from 'react';
import { FaArrowDown } from 'react-icons/fa';

type CarouselButtonProps = {
    clicked?: any,
    type?: string
}

const CarouselButton: FunctionComponent<CarouselButtonProps> = (props) => {
    return (
        <button className={`carousel-button carousel-button--${props.type}`} onClick={props.clicked}>
            <span><FaArrowDown /></span>
        </button>
    )
}

export default CarouselButton;