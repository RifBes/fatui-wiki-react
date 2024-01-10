import './App.css';
//import DescriptionHarb from './components/DescriptionHarb/DescriptinoHarb';
import Header from './components/Header/Header';
import LentaHarbringers from './components/LentaHarbringers/LentaHarbringers';
import SliderHarbringers from './components/SliderHarbringers/SliderHarbringers';

function App() {
    return (
        <div className="App">
            <Header />
            <LentaHarbringers />
            <SliderHarbringers />
        </div>
    );
}

export default App;
