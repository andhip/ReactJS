import React from 'react'


const foods = [
    {
        name: 'Soto',
        harga: 12000
    },
    {
        name: 'Bakso',
        harga: 10000
    },
    {
        name: 'Mie Ayam',
        harga: 82000
    },
    {
        name: 'Nasi Goreng',
        harga: 15000
    },
]

// Map New Looping in JS
const Map = () => {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LAPAN_logo_2015.svg/139px-LAPAN_logo_2015.svg.png" alt="LAPAN"></img>
            <h2 className="gt-2">MAP JavaScript</h2> 
            <p>Map is a new loop function  in JavaScript. </p>

            <section>
            <ul>
                    {foods.map((food, index) => (
                        <div>{index + 1}. <strong>{food.name}</strong>, Rp. {food.harga}</div>
                    ))}

            </ul>
            </section>
        </div>
    )
}

export default Map
