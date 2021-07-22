import Pokemon from './Pokemon';
import pokemons from './data';
import React from 'react';

class Pokedex extends React.Component {
    render () {
        return pokemons.map((pokemon) => (
            <Pokemon className='pokedex' key={pokemon.id} poke={pokemon}/>
          ));
    }
}

export default Pokedex;