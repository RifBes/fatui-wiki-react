import './DescriptionHarb.css';

export default function Describe({ mainInfo }) {
    return (
        <div className="describe_char">
            {mainInfo.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
}
