import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount() {
        this.props.changeAnimal("Bulls")
    }

    render() {
        return (
            <div>
                <h2>Component Sub LifeCycle{}</h2>            
            </div>
        )
    }
}
