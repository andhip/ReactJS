import { render } from '@testing-library/react'
import React, { Component } from 'react'

// Class Component RCC
// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Navbar</h2>
//             </div>
//         )
//     }
// }


// Function Component RFC
// export default function Navbar() {
//     return (
//         <div>
//             <h2>Navbar</h2>
//         </div>
//     )
// }


// Arrow Function
const Navbar = () => {
    return (
        <div>
             <h1>Navbar</h1>
        </div>
    )
}
export default Navbar