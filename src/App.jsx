import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rendu_dossier : '2018 November 26',
            newDeadline: ''
        }
    }
changeRendu_Dossier() {
console.log('state', this.state);
this.setState({rendu_dossier: this.state.newDeadline})
}
    render() {
        return (
            <div className="App">
                <div className="App-title">Temps restant avant diplôme : {this.state.rendu_dossier}  </div>
                <Clock
                rendu_dossier={this.state.rendu_dossier}
                />
                <div>
                <input placeholder={'Nouvelle Date'}
                onChange={event => this.setState({newDeadline: event.target.value }) }
                />
                <button onClick={() => this.changeRendu_Dossier()}>
                    Changer la date
                </button>
            </div>
            </div>

        )
    }
}

export default App;
