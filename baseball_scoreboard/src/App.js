import React, {useState} from 'react';
import './App.css';

function App() 
{
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
     <section className='scoreboard'>
        <div className='strikes'>
          <h3 className='strike-title'>Strikes</h3>
          <div className='strike-value'>{strikes}</div>
        </div>
        <div className='balls'>
          <h3 className='ball-title'>Balls</h3>
          <div className='ball-value'>{balls}</div>
        </div>
     </section>
    </div>
  );
}

export default App;
