import React from 'react';
import './App.css';

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
