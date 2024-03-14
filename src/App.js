import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
 
  const [pokemon, setPokemon] = useState([]);
 
  function loadAPI() {
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu/";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPokemon(res);
      })
      .then(err => {
        console.log(err);
      });
  }
 
  useEffect(() => {
    loadAPI();
  }, []);
 
  return (
    <div>
      <h1>TESTE</h1>
      <div>
        <p><strong>Nome: {pokemon.name}</strong></p>
        <strong>Url: {pokemon.url}</strong>
      </div>
    </div>  

  );
}
 
export default App;