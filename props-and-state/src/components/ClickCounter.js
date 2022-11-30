import React, { useState} from 'react';

const ClickCounter = () => {
  const buttonStyle = {};
  const [count, setCount] = useState(0);

  const isCountZero = count <=0;
  const deCrement = isCountZero ? 0: count-1
  
  return (
      <div>
      <h2>Count: {count}</h2>
      <div>Click the button below to increment the counter</div>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Click!</button>
      
      <button style={buttonStyle} onClick={() => setCount(deCrement)}>UnClick!</button>
      </div>
    );
   }
  
  export default ClickCounter;