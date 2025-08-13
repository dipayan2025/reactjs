
import './App.css'
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(10)
 
  const addValue = () =>{
    counter = counter +1;
    setCounter(counter)
  }
    const RemValue = () =>{
    counter = counter -1;
    setCounter(counter)
  }

  return (
    <> <h1>Hi this is basic</h1>
    <h3>Counter Value:{counter}</h3>
    <button onClick={addValue}>Increase</button>
    <br/>
     <button onClick={RemValue}>Decrease</button>
    </>
  

  );
}

export default App;
