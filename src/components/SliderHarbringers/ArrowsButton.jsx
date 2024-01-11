import './SliderHarbringers.css';

export default function ArrowsButton({
    currentIndex,
    setCurrentIndex,
    slides,
}) {
    function changeSlide(count) {
        const isFisrt = currentIndex === 0;
        const isLast = currentIndex === slides.length - 1;
        if (isFisrt && count < 0) {
            setCurrentIndex(slides.length - 1);
            return;
        } else if (isLast && count > 0) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + count);
        }
    }

    return (
        <div className="slider__buttons-area">
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
        </div>
    );
}
