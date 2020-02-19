import React, { useState } from 'react';
import CarouselContext from "./CarouselContext";
import CarouselContent from './CarouselContent';
import CarouselButton from './CarouselButton';
import CarouselWrapper from './CarouselWrapper';
import useSliding from './useSliding';
import useSize from './useSize';


const Carousel: React.FC = (props: {children?: React.ReactNode, activeItem?: any}) => {
    const [currentItem, setCurrentItem] = useState(props.activeItem);
    const { width, elementRef } = useSize();
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, React.Children.count(props.children));

    const handleSelect = (item: any) => {
        setCurrentItem(item);
    };
    
    const handleClose = () => {
        setCurrentItem(null);
    };
    
    const contextValue = {
        onSelectItem: handleSelect,
        onCloseItem: handleClose,
        elementRef,
        currentItem
    };
    
    const carouselClass = currentItem != null ? 'carousel carousel-open' : 'carousel';

    return (
        <CarouselContext.Provider value={contextValue}>
            <CarouselWrapper>
            <div className={carouselClass}>
                <div ref={containerRef} className="carousel-container" {...slideProps}>{props.children}</div>
                {hasPrev && <CarouselButton clicked={handlePrev} type="prev" />}
                {hasNext && <CarouselButton clicked={handleNext} type="next" />}

            </div>

            </CarouselWrapper>
            {currentItem && <CarouselContent item={currentItem} id={currentItem.id} name={currentItem.name} description={currentItem.description} close={handleClose} />}
        </CarouselContext.Provider>        
    )
}

export default Carousel;