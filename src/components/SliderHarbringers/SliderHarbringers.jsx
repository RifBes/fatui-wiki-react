import './SliderHarbringers.css';
// import './SliderScript.js';

import Pierro from '../img/Pierro.png';
import Il_Capitano from '../img/Il_Capitano.png';
import Dottore from '../img/Dottore.png';
import Columbina from '../img/Columbina.png';
import Arlecchino from '../img/Arlecchino.png';
import Pulcinella from '../img/Pulcinella.png';
import Scaramouche from '../img/Scaramouche.png';
import Sandrone from '../img/Sandrone.png';
import Signora from '../img/Signora.png';
import Pantalone from '../img/Pantalone.png';
import Tartaglia from '../img/Tartaglia.png';

export default function SliderHarbringers() {
    return (
        <div className="slider">
            <div className="slider-container">
                <div className="slider-images">
                    <div className="slider__name" id="slider__name">
                        <p className="slider__name-harb"></p>
                    </div>
                    <img
                        className="slider__image-active slider__image slider_harb_0"
                        src={Pierro}
                        alt="Пьеро"
                    />
                    <img
                        className="slider__image slider_harb_1"
                        src={Il_Capitano}
                        alt="Капитано"
                    />
                    <img
                        className="slider__image slider_harb_2"
                        src={Dottore}
                        alt="Дотторе"
                    />
                    <img
                        className="slider__image slider_harb_3"
                        src={Columbina}
                        alt="Коломбина"
                    />
                    <img
                        className="slider__image slider_harb_4"
                        src={Arlecchino}
                        alt="Арлекино"
                    />
                    <img
                        className="slider__image slider_harb_5"
                        src={Pulcinella}
                        alt="Пульчинелла"
                    />
                    <img
                        className="slider__image slider_harb_6"
                        src={Scaramouche}
                        alt="Скарамуш"
                    />
                    <img
                        className="slider__image slider_harb_7"
                        src={Sandrone}
                        alt="Сандроне"
                    />
                    <img
                        className="slider__image slider_harb_8"
                        src={Signora}
                        alt="Синьора"
                    />
                    <img
                        className="slider__image slider_harb_9"
                        src={Pantalone}
                        alt="Панталоне"
                    />
                    <img
                        className="slider__image slider_harb_11"
                        src={Tartaglia}
                        alt="Тарталья"
                    />
                </div>
                <div className="slider__buttons-area">
                    <div className="arrow" id="left_button">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className="arrow" id="right_button">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
