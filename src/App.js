import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function loadAPI(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPokemon(res);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadAPI('charizard'); // Carrega o Charizard por padrão quando a aplicação é iniciada
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      loadAPI(searchTerm);
    }
  };

  return (
    <div className="container">
      <header>
        <strong>Pokemons API Kevin</strong>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
        <button type="submit">Buscar</button>
      </form>

      <p></p>
      <p></p>
      <p></p>

      <div className='card'>
        
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
        />
       
        <div>
          <strong>Nome: {pokemon.name}</strong>
        </div>
        <div>N° {pokemon.id} </div>
        <div>Peso: {pokemon.weight / 10} kg</div>
        <div>Altura: {pokemon.height / 10} m</div>
      </div>

        </div>

    </div>
  );
}

export default App;
