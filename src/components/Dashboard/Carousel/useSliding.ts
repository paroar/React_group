import { useState, useRef, useEffect } from 'react'

const PADDINGS = 0;

const useSliding = (elementWidth: any, countElements: number) => {
    const containerRef = useRef<HTMLInputElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [distance, setDistance] = useState(0);
    const [totalInViewport, setTotalInViewport] = useState(0)
    const [viewed, setViewed] = useState(0);
    const hasPrev = distance < 0;
    const hasNext = (viewed + totalInViewport) < countElements;

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth - PADDINGS;
            setContainerWidth(containerWidth);
            setTotalInViewport(Math.floor(containerWidth / elementWidth));
        }
    }, []);

    const handlePrev = () => {
        if (hasPrev) {
            setViewed(viewed - totalInViewport);
            setDistance(distance + containerWidth);    
        }    
    }
       
    const handleNext = () => {
        if (hasNext) {
            setViewed(viewed + totalInViewport);
            setDistance(distance - containerWidth);        
        }
    }

    const slideProps = {
      style: { transform: `translate3d(${distance}px, 0, 0)` }
    };

    return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
}

export default useSliding;