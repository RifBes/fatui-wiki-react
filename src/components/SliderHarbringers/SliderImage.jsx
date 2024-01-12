import './SliderHarbringers.css';

import { useState } from 'react';
import { harbringers_name } from './names';
import ArrowsButton from './ArrowsButton';
import DescriptionHarb from '../DescriptionHarb/DescriptinoHarb';

export default function SliderImage({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    let [content, setContent] = useState(null);

    function handleClick(type) {
        setContent(<DescriptionHarb character={type} />);
    }

    return (
        <>
            <div className="slider">
                <div className="slider-container">
                    <div className="slider-images">
                        <div
                            className="slider__name"
                            id="slider__name"
                            onClick={() => handleClick(currentIndex)}
                        >
                            <p className="slider__name-harb">
                                {harbringers_name[currentIndex]}
                            </p>
                        </div>
                        <img
                            onClick={() => handleClick(currentIndex)}
                            className="slider__image-active slider__image slider_harb_0"
                            src={slides[currentIndex]}
                            alt={harbringers_name[currentIndex]}
                        />
                        <ArrowsButton
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                            slides={slides}
                        />
                    </div>
                </div>
            </div>
            {content}
        </>
    );
}
