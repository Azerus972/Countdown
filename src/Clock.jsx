import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jours: 0,
            heures: 0,
            minutes: 0,
            secondes: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.rendu_dossier);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.rendu_dossier), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const secondes = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const heures = Math.floor(time/(1000*60*60) % 24);
        const jours = Math.floor(time/(1000*60*60*24));

        this.setState({jours, heures, minutes, secondes});
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.leading0(this.state.jours)} jours</div>
                <div className="Clock-hours">{this.leading0(this.state.heures)} heures</div>
                <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.leading0(this.state.secondes)} secondes</div>
            </div>
        )
    }
}

export default Clock;