import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentWillMount() {
        fetch('pokemon', {
            method: 'get',
            mode: 'no-cors'
        }).then(response => {
            response.json().then(data => {
                this.setState({pokemon: data});
            });
        }).catch(function(err) {
            // Error :(
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Poke Poke</h2>
                </div>
                <ul>
                    {
                        this.state.pokemon.length > 0 ?
                        this.state.pokemon.map(pokemon => <li key={pokemon.id}>{pokemon.identifier}</li>)
                        : 'Pas de pokemons'
                    }
                </ul>

            </div>
        );
    }
}

export default App;
