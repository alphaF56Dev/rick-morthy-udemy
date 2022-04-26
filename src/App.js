import logo from './logo.svg';
import './App.css';
import imgRickMorthy from './img/rick-morty.png';
import {useState} from "react";
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null); //characters es la contante y setCharacters es la funcion de asignar, se debe respetar la regla de nomenclatura

  const reqApi = async () => { //se convierte en una funcion asincrona

    //console.log("clicking");
    const api = await fetch("https://rickandmortyapi.com/api/character"); //se recibe la respuesta de la api
    const caracterApi = await api.json(); //se transforma la información recibida en Json
    //console.log(caracterApi.results);
    setCharacters(caracterApi.results);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morthy</h1>
        {
          characters ? 
          (<Characters characters={characters} setCharacters={setCharacters}/>) :
          (
          //esto se realiza para encapsular codigo de componentes
          <>
            <img src={imgRickMorthy} alt="Rick & Morthy" className="img-home"/>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>)
        }
        
      </header>
    </div>
  );
}

export default App;
