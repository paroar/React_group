import React from "react";
import CarouselContext from "./CarouselContext";

export type ListProps = {
    name?: string;
    id?: string
}

interface CarouselItemProps {
    list: ListProps,
    children?: React.ReactNode
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => (
    <CarouselContext.Consumer>
        {(elementRef: any) => {
            return (
                <div className="carousel-item" ref={elementRef}>
                    {props.list.name}
                </div>
            )
        }}
    </CarouselContext.Consumer>
)

export default CarouselItem;