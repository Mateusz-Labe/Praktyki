import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
  const [clicks, setClicks] = useState(() => {
    const saved = localStorage.getItem("clicks");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [clicks2, setClicks2] = useState(0);

  const decrease = () => setClicks(c => c - 1);
  const reset = () => setClicks(0);
  const increase = () => setClicks(c => c + 1);
  const increase2 = () => setClicks2(c => c + 1);

 
  useEffect(() => {
    localStorage.setItem("clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <div className='counter-box'>
        <h1 className='counter'>{clicks}</h1>
        <button className='decres' onClick={decrease}>Decrease</button>
        <button className='reset' onClick={reset}>Reset</button>
        <button className='incres' onClick={increase}>Increase</button>
      </div>
      <div className="counter2">
        <button onClick={increase2}>{clicks2}</button>
      </div>
    </div>
  );
}

export default Counter;
