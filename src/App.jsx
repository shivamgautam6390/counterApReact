import { useState } from 'react';
import './App.css';

function App() {
const [count,setCount]=useState(1);
const increment=()=>setCount(count+1);
const decrement=()=>{
  if(count>0){
    setCount(count-1);
  }
}
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={()=>setCount(0)}>reset</button>

      
    </div>
  );
}

export default App;