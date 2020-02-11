import React, { FunctionComponent } from 'react';

const CarouselWrapper: FunctionComponent = ({ children }) => {
    return (
        <div className="carousel-wrapper">
            {children}
        </div>

    )
}

export default CarouselWrapper;