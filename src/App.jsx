import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rendu_dossier : '2018 November 26',
            newrendu_dossier: ''
        }
    }
changeRendu_Dossier() {
console.log('state', this.state);
this.setState({rendu_dossier: this.state.newrendu_dossier})
}
    render() {
        return (
            <div className="App">
                <div className="App-title">Temps restant avant diplôme : {this.state.rendu_dossier}  </div>
                <Clock
                rendu_dossier={this.state.rendu_dossier}
                />
                <Form inline={true}>
                <FormControl
                    className="rendu_dossier"
                    placeholder={'Nouvelle Date'}
                onChange={event => this.setState({newrendu_dossier: event.target.value }) }
                />
                <Button onClick={() => this.changeRendu_Dossier()}>
                    Changer la date
                </Button>
            </Form>
            </div>

        )
    }
}

export default App;
