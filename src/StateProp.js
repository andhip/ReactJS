import React, { Component } from 'react'

export default class StateProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food : 'Bakso, mie ayam, gule'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.food}</h2>
                <button onClick = {() => this.setState({food: ('Kikil kambing')})}>Ganti Makanan</button>
            </div>
        )
    }
}
