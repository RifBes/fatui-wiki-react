import './LentaHarbringers.css';
import './img.css';
import { useState } from 'react';
import DescriptionHarb from '../DescriptionHarb/DescriptinoHarb.jsx';
import { info } from '../data/harbringers_info.js';

export default function LentaHarbringers() {
    let [content, setContent] = useState(null);

    function handleClick(type) {
        setContent(<DescriptionHarb character={type} />);
    }

    return (
        <>
            <div className="grid-container-harb">
                {info.map((info) => (
                    <div
                        key={info.id}
                        id={info.name}
                        className={`harb harb_${info.id}`}
                        data-text={info.name}
                        onClick={() => handleClick(info.name)}
                    ></div>
                ))}
            </div>

            <>{content}</>
        </>
    );
}
