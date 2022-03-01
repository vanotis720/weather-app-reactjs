import React, { Component } from "react";
import Day from "./Day";
import Loader from "./Loader";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            city: 'lubumbashi',
            latitude: '-11.6876026',
            longitude: '27.5026174'
        };
    }

    handleChange = (value) => {
        this.setState({ city: value });
        console.log('ville state' + this.state.city);
        console.log('ville sended' + this.state.city);

    }

    componentWillMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    console.log(position);
                },
                function (error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
        }

        this.callAPI(this.state.city)
    }

    callAPI(city) {
        const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=17a4671755364f24808112227220103&q=' + this.state.latitude + ',' + this.state.longitude + '&days=5&aqi=no&alerts=no&lang=fr';
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
            });
    }

    render() {
        if (this.state.weather === null) {
            return (
                <Loader />
            );
        }
        else {
            return <Day weather={this.state.weather} handleChange={this.handleChange} />;
        }
    }
}

export default Weather;