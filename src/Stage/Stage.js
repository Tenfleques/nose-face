import React, { Component } from 'react';
import pkg from "../Configs/package"


class Stage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }

    
    render() {
        return (
            <div className="row">
                <div className="bg-primary col-12 pt-3">
                    <h3 className="col-12 text-white">
                        {pkg.appname}
                    </h3>
                    <p className="text-lead col-12 text-white">
                        {pkg.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default Stage;