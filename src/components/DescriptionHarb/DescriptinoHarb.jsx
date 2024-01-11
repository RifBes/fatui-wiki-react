import './DescriptionHarb.css';
import { info } from '../data/harbringers_info.js';
import Describe from './Describe.jsx';
import { createRef } from 'react';
import QuotesSection from './QuotesSection.jsx';

export default function DescriptionHarb({ character }) {
    let myRef = createRef();

    const harbringer = info.find((a) => {
        return a.id === character;
    });

    //прокрутка
    const scrollToMyRef = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    setTimeout(scrollToMyRef, 0);

    return (
        <>
            <div ref={myRef} className={harbringer.id} id="char">
                <h2 className="name_title">{harbringer.name}</h2>
                <QuotesSection character={harbringer} />
                <Describe mainInfo={harbringer.mainInfo} />
                <button className="btn">Подробнее...</button>
            </div>
        </>
    );
}
