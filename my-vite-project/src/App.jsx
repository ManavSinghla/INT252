import { useState, useEffect, useRef } from 'react';
import './App.css';

function Timer(){
  const [count,SetCount]= useState(10);
  const ref= useRef(null);
  useEffect(()=>{
    ref.current=setInterval(() => {
      SetCount(count-1);
    }, 1000);
    
    return ()=> clearInterval(ref.current)
  });
  return <h1 className='m-2 p-2 text-blue-400'>{count >0 ? count : "Time's Up"} </h1>
}

export default Timer;