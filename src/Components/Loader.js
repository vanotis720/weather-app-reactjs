import React, { Component } from "react";

class Loader extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-grow text-success" role="status">
                </div>
            </div>
        )
    }
}

export default Loader;