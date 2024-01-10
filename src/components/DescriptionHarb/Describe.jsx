export default function Describe({ mainInfo }) {
    return (
        <>
            {mainInfo.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </>
    );
}
