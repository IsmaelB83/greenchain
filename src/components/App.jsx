// Own components
import MainContent from './MainContent/MainContent';
import SideMenu from './SideMenu/SideMenu';
import NavBar from './Navbar/Navbar';
import Console from './Console/Console';
// Own modules
// Styles
import './App.css';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="MainContainer">
                <SideMenu/>
                <MainContent/>
            </div>
            <Console/>
        </div>
    );
}

export default App;
