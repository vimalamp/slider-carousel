import React, { useState , useEffect } from 'react';
import './slider.scss';

export const Slider = ({ slidesInterval = 4, slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    if (!slides) { slides = []; }
    const slidesLength = slides.length;
    const handleLeftArrow = () => {
        let newActInd = 0;
        (activeIndex > 0 ? newActInd = activeIndex - 1 : newActInd = slidesLength - 1);
        setActiveIndex(newActInd);
    };
    const handleRightArrow = () => {
        var newActInd = 0;
        (activeIndex < slidesLength - 1 ? newActInd = activeIndex + 1 : newActInd = 0);
        setActiveIndex(newActInd);
    };

    const slideHtml = () => {

        return { __html: slides[activeIndex] };
    };

    useEffect(() => {
        let interval = null;
        if (!isPaused) {
            interval = setInterval(handleRightArrow, slidesInterval * 1000);
            return () => clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPaused, activeIndex]);

    return (
        <div className="slider">
            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <h1>Slider</h1>
                <div className="button-container">
                    <button className="btn-arrows" onClick={handleLeftArrow}>&lt;</button>
                    <button className="btn-arrows" onClick={handleRightArrow}>&gt;</button>
                </div>

                <div
                    className="slider-container"
                    dangerouslySetInnerHTML={slideHtml()}
                />
            </div>
        </div>
    );
};
