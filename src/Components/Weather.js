import React, { Component } from "react";
import Day from "./Day";
import Loader from "./Loader";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        };
    }

    componentWillMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('position ' + position.coords.latitude);

                    this.callAPI(position.coords.latitude, position.coords.longitude)
                },
                function (error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                    alert('vous devez activer la localisation');
                }
            );
        }
    }

    callAPI(latitude, longitude) {
        const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=17a4671755364f24808112227220103&q=' + latitude + ',' + longitude + '&days=5&aqi=no&alerts=no&lang=fr';
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
        if (this.state.weather !== null && this.state.weather.error === undefined) {
            return <Day weather={this.state.weather} />;
        }
        else {
            return (
                <Loader />
            );
        }
    }
}

export default Weather;