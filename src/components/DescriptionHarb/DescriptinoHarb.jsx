import './DescriptionHarb.css';
import { info } from '../data/harbringers_info.js';
import Quotes from './Quotes';
import Describe from './Describe.jsx';
import { createRef } from 'react';

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
                <blockquote className="blockquote">
                    <Quotes {...harbringer.quote[0]} />
                    <Quotes {...harbringer.quote[1]} />
                </blockquote>
                <div className="describe_char">
                    <Describe mainInfo={harbringer.mainInfo} />
                </div>
                <button className="btn">Подробнее...</button>
            </div>
        </>
    );
}
