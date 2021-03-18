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
        harga: 8000
    },
    {
        name: 'Nasi Goreng',
        harga: 15000
    },
]


// Reduce
const totalBayar = foods.reduce((totalHarga, food) => {
    return totalHarga+food.harga;
}, 0);

// Map New Looping in JS
const Map = () => {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LAPAN_logo_2015.svg/139px-LAPAN_logo_2015.svg.png" alt="LAPAN"></img>
            <h2 className="gt-2">Simple MAP</h2> 
           {/* Map is a new loop function  in JavaScript.  */}

            <section>
            <ul>
                    {foods.map((food, index) => (
                        <div>{index + 1}. <strong>{food.name}</strong>, Rp. {food.harga}</div>
                    ))}

            </ul>
     
            </section>

            <section id="sec2">
        <h2 className="gt-3">MAP Filter more than Rp. 11000</h2> 
           {/* Map is a new loop function  in JavaScript.  */}

         
            <ul>
                    {foods.filter((food) => food.harga > 11000)
                    .map((food, index) => (
                        <div>{index + 1}. <strong>{food.name}</strong>, Rp. {food.harga}</div>
                    ))}

            </ul>

            <h2> Total Dibayar = Rp. {totalBayar}</h2>
        </section>
        </div>
    )
}

export default Map
