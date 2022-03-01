import { Component } from "react";


class City extends Component {

    constructor(props) {
        super(props)

        this.changeCity = this.changeCity.bind(this);

        this.state = {
            city: "lubumbashi"
        }
    }

    changeCity(e) {
        this.setState({
            city: e.target.value
        })

        this.props.handleChange(e.target.value);
        // console.log(this.state.city);
    }

    render() {
        return (
            <div className="col-lg-4 grid-margin">
                <select id="city" name="city" onChange={this.changeCity} value={this.state.city} className="form-select" aria-label="selectionner la ville">
                    <option value="lubumbashi">Lubumbashi</option>
                    <option value="likasi">Likasi</option>
                    <option value="kolwezi">Kolwezi</option>
                    <option value="kipushi">Kipushi</option>
                    <option value="kasumbalesa">Kasumbalesa</option>
                </select>
            </div>
        );
    };
}

export default City;