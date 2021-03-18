import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             animal : 'Leo',
             data: {},
             showPageSub: false,
        }
    }
    
    // menampilkan data dari API ke data{}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                data: json
            })
        })
    }

    changeAnimal(value) {
        this.setState({
            animal: value
        })
    }
    
    render() {
        return (
            <div>
                <h2>Hello  {this.state.animal}</h2>

                {this.state.showPageSub && <Sublifecycle changeAnimal={(value) => this.changeAnimal(value)} />}
                <button onClick= {() => this.setState({showPageSub: !this.state.showPageSub})}>ShowPageSub</button>
            </div>
        )
    }
}
