import logo from './logo.svg';
import './App.css';
import Componente from './components/Componentes'
import Propiedades from './components/propiedades';
import Reloj from './components/Reloj'

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
      <Componente msg="Hola soy un componente"/>
      <hr/>
      <hr/>
      <Propiedades/>
      <hr/>
      <hr/>
      <Reloj/>
    </div>
  );
}

export default App;
