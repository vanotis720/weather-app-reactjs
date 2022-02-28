import React, { Component } from "react";
import Day from "./Day";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        };
    }

    componentWillMount() {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=lubumbashi&exclude=hourly,minutely,alerts&lang=fr&units=metric&appid=ae9b2d8644e21fbd20441333eaafe5d7';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('This is your data', data);
                this.setState({
                    weather: data,
                });
            })
            .catch((error) => {
                console.error(error);
            });;
    }
    render() {
        if (this.state.weather === null) {
            return (
                <p>loading...</p>
            );
        }
        else {
            return <Day weather={this.state.weather} />;
        }
    }
}

export default Weather;