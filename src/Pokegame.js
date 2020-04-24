import React, {Component} from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends React.Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render() {
            let hand1 = [];
            let hand2 = this.props.pokemon;
            let pokemonLeft = this.props.pokemon;
            function randomPokemon() { 
                return Math.floor(Math.random() * (hand2.length));
            }
            for(let x=0;x<4;x++) {
            let selectedPokemon = hand2[randomPokemon()];
            hand1.push(selectedPokemon);
            hand2.splice(pokemonLeft.indexOf(selectedPokemon), 1);
            }
            
            const hand1Exp = hand1.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);
            const hand2Exp = hand2.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);

        return (
            <div className='Pokegame'>
                <h6 className='Pokegame-title'>POKEDEX DUEL</h6>
                <Pokedex hand={hand1} player={1} isWinner={hand1Exp > hand2Exp} exp={hand1Exp}/>
                <Pokedex hand={hand2} player={2} isWinner={hand2Exp > hand1Exp} exp={hand2Exp}/>

            </div>
        )
    }
}

export default Pokegame