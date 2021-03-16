import React from 'react'

//Variavle sifatnya global scope 
// Const dan Let sifatnya block scope {}, tetap


// const 
// const harga = 3000;

// Var
// var harga = 2000;
// if(true) {
//   var  harga = '$250000'
// }

// Let
let harga = 2000;
if(true) {
    harga = '$250000'
}


const Variable = () => {
    return (
        <div>
            <h2>Harga  : {harga}</h2>
        </div>
    )
}

export default Variable
