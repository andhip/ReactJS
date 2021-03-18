import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(new_food) {
    //     this.setState({
    //         food: new_food
    //     })
    // }


    render() {
        return (
            <div>
                <h2>Operan State which become Props : {this.props.food}</h2>
                <button onClick = {() => this.props.gantiMakanan("Remote Sensing System")}>Change Division</button>
            </div>
        )
    }
}
