import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends React.Component {
    render() {
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <div>id: {this.props.id}</div>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.id + ".png"}/>
            </div>
        )
    }
}

export default Pokecard;