import './SliderHarbringers.css';

import SliderImage from './SliderImage.jsx';

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
    const names = [
        Pierro,
        Il_Capitano,
        Dottore,
        Columbina,
        Arlecchino,
        Pulcinella,
        Scaramouche,
        Sandrone,
        Signora,
        Pantalone,
        Tartaglia,
    ];
    return (
        <>
            <SliderImage slides={names} />
        </>
    );
}
