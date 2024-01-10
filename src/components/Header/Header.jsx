import './Header.css';
import logo from './Fatui_logo.png';

export default function Header() {
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Логотип" />
                <h1 className="main_header">Предвестники Фатуи</h1>
            </div>
            <div className="intro">
                <p>Немного о предвестниках</p>
            </div>
        </>
    );
}
