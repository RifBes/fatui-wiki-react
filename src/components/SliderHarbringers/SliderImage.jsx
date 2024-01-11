import './SliderHarbringers.css';

import { useState } from 'react';
import { harbringers_name } from './names';
import ArrowsButton from './ArrowsButton';

export default function SliderImage({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <div className="slider__name" id="slider__name">
                <p className="slider__name-harb">
                    {harbringers_name[currentIndex]}
                </p>
            </div>
            <img
                className="slider__image-active slider__image slider_harb_0"
                src={slides[currentIndex]}
                alt={harbringers_name[currentIndex]}
            />
            {/* <div className="slider__buttons-area">
                <div
                    className="arrow"
                    id="left_button"
                    onClick={() => changeSlide(-1)}
                >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div
                    className="arrow"
                    id="right_button"
                    onClick={() => changeSlide(1)}
                >
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div> */}
            <ArrowsButton
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                slides={slides}
            />
        </>
    );
}
