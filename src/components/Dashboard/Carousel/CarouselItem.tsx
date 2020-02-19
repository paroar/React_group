import React, { MutableRefObject } from "react";
import CarouselContext from "./CarouselContext";
import CarouselItemDetails from "./CarouselItemDetails";
import Mark from "./Mark";
// import TourImages from "./TourImages";

export type ListProps = {
    name?: string;
    description?: string;
    path?: string;
    id?: string;
    tour: boolean
}

export interface CarouselItemProps {
    list: ListProps,
    children?: React.ReactNode
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => (

    <CarouselContext.Consumer>
    {({onSelectItem, currentItem, elementRef}: {onSelectItem: any, currentItem: ListProps, elementRef: MutableRefObject<HTMLDivElement>}) => {
        const imgPath = (props.list.tour ? '' : `url(https://image.tmdb.org/t/p/w500/${props.list.path})`); 
        const isActive = currentItem && (currentItem.id === props.list.id);
        return (
            <div ref={elementRef} className={isActive ? 'carousel-item carousel-item-open' : 'carousel-item'} style={{'background': imgPath, 'backgroundSize': 'cover',
                'backgroundPosition': 'center'}}>
                <span className="overlay">
                    {props.list.name}
                </span>
                <CarouselItemDetails onClick={() => onSelectItem(props.list)} />
                {isActive ? <Mark /> : null}
            </div>
        );
    }}
    </CarouselContext.Consumer>
)

export default CarouselItem;