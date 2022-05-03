import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css'

import { HeaderLoco } from '../components/HeaderLoco';
import { FooterLoco } from '../components/FooterLoco';


function App() {
    return (
        <div className="App">
            <HeaderLoco />            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <FooterLoco />
        </div>
    );
};

export default App;
