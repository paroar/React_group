import React from 'react';
import { FaCross } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { ListProps } from './CarouselItem';

type ContentProps = {
    item: ListProps,
    close: any
}

const CarouselContent = (props: ContentProps) => {
    const handleView = () => (
        <Redirect to={`/lists/${props.item.id}`}/>
    )

    return (
        <div className="carousel-content">
            <div className="carousel-content-background">
                <div className="carousel-content-shadow"></div>
                <div className="carousel-content-image" style={{
                    backgroundImage: `url(${props.item.path})`
                }} />
            </div>
            <div className="carousel-content-area">
                <div className="carousel-content-container">
                    <div className="carousel-content-title">
                        {props.item.name}
                    </div>
                    <div className="carousel-content-description">
                        {props.item.description}
                    </div>
                </div>
                <button onClick={handleView}>View List</button>
            </div>
            <button className="carousel-content-close" onClick={props.close}>
                <FaCross />
            </button>
        </div>
    )
}

export default CarouselContent;
