import React from "react";
import CarouselContext from "./CarouselContext";
import CarouselItemDetails from "./CarouselItemDetails";
import Mark from "./Mark";
import TourImages from "./TourImages";

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

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const imgPath = (props.list.tour ? '' : `url(https://image.tmdb.org/t/p/w500/${props.list.path})`); 
    console.log(props.list)
    return(
        
        <CarouselContext.Consumer>
        
        {({onSelectItem, currentItem, elementRef}: {
            onSelectItem: any,
            currentItem: any,
            elementRef: any
        }) => {
            const isActive = currentItem && currentItem.id === props.list.id;
            const itemClass = isActive ? 'carousel-item-open' : 'carousel-item';
            return (
                <div ref={elementRef} className={itemClass} style={{background: imgPath}}>
                    {props.list.name}
                    {props.list.tour ? <TourImages>{props.list}</TourImages> : null}
                    {/* <img src={imgPath} alt=""/> */}
                    <CarouselItemDetails onClick={() => onSelectItem(props.list)} />
                    {isActive && <Mark />}
                </div>
            );
        }}
    </CarouselContext.Consumer>

    )
}

export default CarouselItem;