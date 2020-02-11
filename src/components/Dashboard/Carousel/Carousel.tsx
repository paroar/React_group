import React, { FunctionComponent } from 'react';
import CarouselButton from './CarouselButton';
import CarouselWrapper from './CarouselWrapper';
import useSliding from './useSliding';
import useSize from './useSize';


const Carousel: FunctionComponent = ({ children }) => {
    //@ts-ignore
    const { width, elementRef } = useSize();
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef
        // hasNext,
        // hasPrev
      } = useSliding(width, React.Children.count(children));
    
    // const contextValue = {
    //     elementRef
    // };
    
    return (
        // <CarouselContext.Provider value={contextValue}>
            <CarouselWrapper>
                <CarouselButton clicked={handlePrev} type="prev" />
                <CarouselButton clicked={handleNext} type="next" />
                <div ref={containerRef} className="carousel-container" {...slideProps}>{children}</div>
            </CarouselWrapper>
        // </CarouselContext.Provider>        
    )
}

export default Carousel;