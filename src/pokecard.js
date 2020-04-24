import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends React.Component {
    render() {
        //Formats id value to be compatable with pokemon image api
        let id = (this.props.id).toString();
        if(id.length === 2) {
            id = ("0" + id);
        } else if(id.length === 1) {
            id = ("00" + id);
        }
        return (
            <div className="Pokecard">
                <h1 className='Pokecard-name'>{this.props.name}</h1>
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}/>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;
