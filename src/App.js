import React from 'react';
import './App.css';

import Dash from './components/Dash'

function App() {
  return (
    <div className='background'>
      <div className="App">
        <div style={{borderBottom:'3px solid black', height:'8vh', fontSize:'40px', padding:'20px',  background:'white'}}>My Travel Wish List!</div>
      <Dash/>
      <footer style={{height:'70px', width:'100vw', border:'3px solid black', padding:'30px', fontSize:'40px', marginLeft:"-30px"}}> Happy Travels! </footer>
      
      </div>
    </div>
  );
}

export default App;
