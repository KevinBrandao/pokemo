import React, { useState, useEffect} from 'react';
import './style.css';
 
function App() {
 
  const [pokemon, setPokemon] = useState([]);
 
  function loadAPI() {
    let url = "https://pokeapi.co/api/v2/pokemon/6";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setPokemon(res)
      })
      .catch(err => console.log(err));
  }
 
  useEffect(() => {
    loadAPI();
  }, []);
 
  return (
    <div className="container">
      <header>
        <strong>Pokemons API</strong>
      </header>

      <div>
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}/>
        <div><strong>Nome: {pokemon.name}</strong></div>
        <div>N° {pokemon.id} </div>
        <div>Peso: {pokemon.weight / 10} kg</div>
        <div>Altura: {pokemon.height / 10} m</div>
      </div>

    </div>  

  );
}
 
export default App;