import React from 'react';
import ReactDOM from 'react-dom';
// import './Style.css';
// import App from './App';
// import Variable from './Variable'
// import StateProp from './StateProp';
// import Map from './Map'
// import LifeCycle from './LifeCycle'
import tictactoe from './tictactoe'



ReactDOM.render(
  <React.StrictMode>
    {/* <Variable /> */}
    {/* <StateProp /> */}
    {/* <Map /> */}
    {/* <LifeCycle/> */}
    <tictactoe/>
  </React.StrictMode>,
  document.getElementById('root')
);

