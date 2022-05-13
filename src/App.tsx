import React from 'react';
import logo from './logo.svg';
import './App.css';
// require   sample from './';


function App() {
  return (
    <div className="App">
      <h1 className="Title">Warframe: Thebe Speedrun</h1>
        <video className='videoTag' autoPlay loop muted controls>
    <source src={require('./videoelement.mov')} type='video/webm'/>
</video>
    </div>
  );
}

export default App;
