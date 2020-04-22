import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div className='Pokedex'>
                <h4>player 1</h4>
                <div className='Pokedex-card'>
                    {this.props.hand1.map((p) => ( 
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> 
                    ))}
                </div>
                <h4>Player 2</h4>
                <div className='Pokedex-card'>
                    {this.props.hand2.map((p) => ( 
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> 
                    ))}
                </div>

            </div>       
        )
    }
}

export default Pokedex;