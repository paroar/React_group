import React, { FunctionComponent } from 'react';
import CarouselButton from './CarouselButton';
import CarouselWrapper from './CarouselWrapper';
import useSliding from './useSliding';
import useSize from './useSize';


const Carousel: FunctionComponent = (props) => {
    //@ts-ignore
    const { width, elementRef } = useSize();
    const numberOfChildren = React.Children.count(props.children);
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef
        // hasNext,
        // hasPrev
      } = useSliding(width, numberOfChildren);
    console.log("CHILDREN:", numberOfChildren);
    // const contextValue = {
    //     elementRef
    // };
    return (
        // <CarouselContext.Provider value={contextValue}>
            <CarouselWrapper>
                
                <CarouselButton clicked={handlePrev} type="prev" />
                <CarouselButton clicked={handleNext} type="next" />
                <div ref={containerRef} className="carousel-container" {...slideProps}>{props.children}</div>
            </CarouselWrapper>
        // </CarouselContext.Provider>        
    )
}

export default Carousel;