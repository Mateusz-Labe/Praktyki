import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
  const [clicks, setClicks] = useState(() => {
    const saved = localStorage.getItem("clicks");
    return saved ? parseInt(saved, 10) : 0;
  });

  const decrease = () => setClicks(c => c - 1);
  const reset = () => setClicks(0);
  const increase = () => setClicks(c => c + 1);

 
  useEffect(() => {
    localStorage.setItem("clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <div className='counter-box'>
        <h1 className='counter'>{clicks}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  );
}

export default Counter;
