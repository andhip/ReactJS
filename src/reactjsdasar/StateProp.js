import React, { Component } from 'react'
import Operan from './Operan';

// Cara 2
export default class StateProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food : 'Remote Sensing System'
        }
    }

    gantiMakanan = (new_food) => {
        this.setState({
            food: new_food
        })
    }

    render() {
        return (
           
            <div> 
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LAPAN_logo_2015.svg/139px-LAPAN_logo_2015.svg.png" alt="LAPAN"></img>
                <h2 className="gt">React.js</h2>
                <section>

                    <h2>{this.state.food}</h2>
                    <button onClick = {() => this.gantiMakanan("Software Engineer")}>Change Division</button>
                    <Operan food= {this.state.food} gantiMakanan ={this.gantiMakanan}/>

                </section>
            </div>
        )
    }
}


// Cara 1
// export default class StateProp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             food : 'Bakso, mie ayam, gule'
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.food}</h2>
//                 <button onClick = {() => this.setState({food: ('Kikil kambing')})}>Ganti Makanan</button>
//             </div>
//         )
//     }
// }

