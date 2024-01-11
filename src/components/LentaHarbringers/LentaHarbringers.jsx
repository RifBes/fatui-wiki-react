import './LentaHarbringers.css';
import './img.css';
import { useState } from 'react';
import DescriptionHarb from '../DescriptionHarb/DescriptinoHarb.jsx';

export default function LentaHarbringers() {
    let [content, setContent] = useState(null);

    function handleClick(type) {
        setContent(<DescriptionHarb character={type} />);
    }

    return (
        <>
            <div className="grid-container-harb">
                <div
                    id="Pierro"
                    className="harb harb_0"
                    data-text="Пьеро"
                    onClick={() => handleClick('Pierro')}
                ></div>
                <div
                    id="Capitano"
                    className="harb harb_1"
                    data-text="Капитано"
                    onClick={() => handleClick('Capitano')}
                ></div>
                <div
                    id="Dottore"
                    className="harb harb_2"
                    data-text="Дотторе"
                    onClick={() => handleClick('Dottore')}
                ></div>
                <div
                    id="Columbina"
                    className="harb harb_3"
                    data-text="Коломбина"
                    onClick={() => handleClick('Columbina')}
                ></div>
                <div
                    className="harb harb_4"
                    data-text="Арлекино"
                    onClick={() => handleClick('Arlecchino')}
                ></div>
                <div
                    className="harb harb_5"
                    data-text="Пульчинелла"
                    onClick={() => handleClick('Pulcinella')}
                ></div>
                <div
                    className="harb harb_6"
                    data-text="Скарамучча"
                    onClick={() => handleClick('Scaramouche')}
                ></div>
                <div
                    className="harb harb_7"
                    data-text="Сандроне"
                    onClick={() => handleClick('Sandrone')}
                ></div>
                <div
                    className="harb harb_8"
                    data-text="Синьора"
                    onClick={() => handleClick('Signora')}
                ></div>
                <div
                    className="harb harb_9"
                    data-text="Панталоне"
                    onClick={() => handleClick('Pantalone')}
                ></div>
                <div
                    id="Tartaglia"
                    className="harb harb_11"
                    data-text="Тарталья"
                    onClick={() => handleClick('Tartaglia')}
                ></div>
            </div>
            <>{content}</>
        </>
    );
}
