import React from 'react';
import { FaCross } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

type ContentProps = {
    item: {
        path: string,
        id: string,
        description: string,
        title: string
    },
    close: any
}

const CarouselContent = (props: ContentProps) => {
    const handleView = () => (
        <Redirect to={`/lists/${props.item.id}`}/>
    )

    return (
        <div className="carousel-content">
            <div className="content-background">
                <div className="content-shadow"></div>
                <div className="content-image" style={{
                    backgroundImage: `url(${props.item.path})`
                }} />
            </div>
            <div className="content-area">
                <div className="content-container">
                    <div className="content-title">
                        {props.item.title}
                    </div>
                    <div className="content-description">
                        {props.item.description}
                    </div>
                    <button onClick={handleView}>View List</button>
                </div>
            </div>
            <button className="content-close" onClick={props.close}>
                <FaCross />
            </button>
        </div>
    )
}

export default CarouselContent;
