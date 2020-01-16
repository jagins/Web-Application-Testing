import React, {useState} from 'react';
import './App.css';

function App() 
{
  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
     <section className='scoreboard'>
        <div className='strikes'>
          <h3 className='strike-title'>Strikes</h3>
          <div className='strike-value'>0</div>
        </div>
        <div className='balls'>
          <h3 className='ball-title'>Balls</h3>
          <div className='ball-value'>0</div>
        </div>
     </section>
    </div>
  );
}

export default App;
