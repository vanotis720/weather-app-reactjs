import React, { Component } from 'react';
import City from './City';

class Day extends Component {
    constructor(props) {
        super(props)
        const date = new Date();

        this.state = {
            today: new Date(date).toLocaleString('fr-FR', { month: 'long', day: 'numeric' }),
        }
    }
    render() {
        return (
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <City />
                        <div className="col-lg-8 grid-margin stretch-card">
                            {/* <!--weather card--> */}
                            <div className="card card-weather">
                                <div className="card-body">
                                    <div className="weather-date-location">
                                        <h3 className='text-capitalize'>
                                            {new Date().toLocaleString('fr-cd', { weekday: 'long' })}
                                        </h3>
                                        <p className="text-gray"> <span className="weather-date">{this.state.today},</span>
                                            <span className="weather-location">{this.props.weather.name},</span>
                                            <span>{this.props.weather.sys.country}</span>
                                        </p>
                                    </div>
                                    <div className="weather-data d-flex">
                                        <div className="mr-auto">
                                            <h4 className="display-3">
                                                {this.props.weather.main.temp}
                                                <span className="symbol">°</span>C
                                            </h4>
                                            <p className='text-capitalize'> {this.props.weather.weather[0].description}
                                                <i className="mdi mdi-weather-pouring weather-icon"></i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="d-flex weakly-weather">
                                        <div className="weakly-weather-item">
                                            <p className="mb-0"> Sun </p> <i className="mdi mdi-weather-cloudy"></i>
                                            <p className="mb-0"> 30° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Mon </p> <i className="mdi mdi-weather-hail"></i>
                                            <p className="mb-0"> 31° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Tue </p> <i className="mdi mdi-weather-partlycloudy"></i>
                                            <p className="mb-0"> 28° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Wed </p> <i className="mdi mdi-weather-pouring"></i>
                                            <p className="mb-0"> 30° </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--weather card ends--> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day;