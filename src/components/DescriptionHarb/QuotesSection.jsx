import Quotes from './Quotes';
import './DescriptionHarb.css';

export default function QuotesSection({ character }) {
    console.log(character);
    return (
        <blockquote className="blockquote">
            {character.quote.map((quote) => (
                <Quotes key={quote.text} {...quote} />
            ))}
        </blockquote>
    );
}
