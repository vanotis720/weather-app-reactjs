import React, { Component } from 'react';
import City from './City';

class Day extends Component {
    constructor(props) {
        super(props)
        const date = new Date();

        this.state = {
            today: new Date(date).toLocaleString('fr-FR', { month: 'long', day: 'numeric' }),
            prevision: null,
            city: 'lubumbashi',
        }
    }

    componentWillMount() {
        const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=17a4671755364f24808112227220103&q=lubumbashi&days=5&aqi=no&alerts=no';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('This is your prevision data ', data);
                this.setState({
                    prevision: data,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    getDayName(number) {
        const date = this.addDays(new Date(), number);
        return new Date(date).toLocaleString('fr-cd', { weekday: 'long' })
    }

    render() {
        return (
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        {/* <City handleChange={this.props.handleChange} /> */}
                        <div className="col-lg-8 grid-margin stretch-card">
                            {/* <!--weather card--> */}
                            <div className="card card-weather">
                                <div className="card-body">
                                    <div className="weather-date-location">
                                        <h3 className='text-capitalize'>
                                            {new Date().toLocaleString('fr-cd', { weekday: 'long' })}
                                        </h3>
                                        <p className="text-gray"> <span className="weather-date">{this.state.today},</span>
                                            <span className="weather-location">{this.props.weather.location.name},</span>
                                            <span>{this.props.weather.location.country}</span>
                                        </p>
                                    </div>
                                    <div className="weather-data d-flex">
                                        <div className="mr-auto">
                                            <h4 className="display-3">
                                                {this.props.weather.current.temp_c}
                                                <span className="symbol">°</span>C
                                            </h4>
                                            <p className='text-capitalize'>
                                                <img className='img-fluid' src={this.props.weather.current.condition.icon} alt='weather img' /><br />
                                                <span className='font-weight-bold'>{this.props.weather.current.condition.text}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="d-flex weakly-weather text-capitalize">
                                        {
                                            (this.state.prevision !== null) ?

                                                this.state.prevision.forecast.forecastday.map((data, index) => {
                                                    return (
                                                        <div className="weakly-weather-item" key={index}>
                                                            <p className="mb-0"> {this.getDayName(index + 1)} </p>
                                                            <img className='img-fluid' src={data.day.condition.icon} alt='weather img' />
                                                            <p className="mb-0 h4"> {data.day.maxtemp_c}°</p>
                                                        </div>
                                                    );
                                                }) :
                                                <span></span>
                                        }
                                    </div>
                                </div>
                                {/* <!--weather card ends-->  17a4671755364f24808112227220103*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day;