import logo from './logo.svg';
import './App.css';
import Propiedades from './components/propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> Seguir
      </header>
      <Propiedades/>
    </div>
  );
}

export default App;
