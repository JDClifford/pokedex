import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div className='Pokedex'>
                <div className="Pokedex-title">
                <h4>Player {this.props.player}</h4>
                <h5>Total Experience: {this.props.exp}</h5>
                {this.props.isWinner ? <h3 class="Pokedex-winner">Winning Hand</h3> : <h3 class="Pokedex-loser">Losing Hand</h3>}
                </div>
                <div className='Pokedex-card'>
                    {this.props.hand.map((p) => ( 
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> 
                    ))}
                </div>
            </div>       
        )
    }
}

export default Pokedex;