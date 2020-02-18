import React from 'react';
import styled from "styled-components";


const TourImages = (item: any) => {
    const ImageDiv = styled.div`
        width: 6%;
        height: 3%;
        display: flex;
        flex-direction: column;
    `;

    return (
        <ImageDiv>
            <div style={{
                background: 'green',
                width: '20px'
                
            }} />
            <img src={item.second} alt=""/>
            <img src={item.third} alt=""/>
            <img src={item.fourth} alt=""/>
        </ImageDiv>
    )
}

export default TourImages;