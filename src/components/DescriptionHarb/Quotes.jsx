export default function Quotes({ text, author }) {
    return (
        <>
            <p>{text}</p>
            <cite>{author}</cite>
        </>
    );
}
